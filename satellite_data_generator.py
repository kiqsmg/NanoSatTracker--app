#!/usr/bin/env python3
"""
Enhanced FloripaSat-1 Mock Data Generator - Full Year (365 days)
MongoDB Format with BSON type annotations
Based on realistic orbital patterns, battery cycles, and solar panel performance
"""

import json
import math
import random
import time
from datetime import datetime, timedelta
from typing import List, Dict, Any


class SatelliteDataGeneratorMongoDB:
    def __init__(self):
        # Realistic ranges based on existing data
        self.ranges = {
            'battery_cell_1_voltage': {'min': 3.58, 'max': 4.17},
            'battery_cell_2_voltage': {'min': 3.59, 'max': 4.18},
            'battery_temperature': {'min': 3.8, 'max': 16.8},
            'battery_current': {'min': -0.20, 'max': 0.18},
            'battery_charge': {'min': 2.8, 'max': 20.5},
            'sp_current': {'min': 0, 'max': 0.49},
            'sp_voltage': {'min': 0, 'max': 4.9},
            'eps_temperature': {'min': 13.0, 'max': 28.0}
        }
        
        # Ham radio callsigns for variety
        self.callsigns = [
            "DK3WN", "KB9JHU", "K4KDR", "SQ3XZ", "DL4PD", "KJ7LXJ",
            "ZR1ADC", "JA5BLZ", "VK2DEE", "SM0TER", "F4HPW", "IZ2UUF",
            "PY2SDR", "LU1EQI", "EA1AKS", "JE9PEL", "HL9DX", "BV1EK"
        ]
        
        self.grid_locators = [
            "JN49lr", "EM69uf", "FM17es", "JO82ik", "JO30cr", "LL34js",
            "PM63uo", "QF22lb", "JO89hp", "KP20ke", "JN23db", "JN55wf",
            "GG66sa", "FF33br", "IN80eo", "PM95pd", "OM48dx", "PL05ai"
        ]
    
    def generate_object_id(self) -> str:
        """Generate a MongoDB-style ObjectId"""
        import hashlib
        timestamp = int(time.time())
        random_bytes = random.getrandbits(64)
        object_id = f"{timestamp:08x}{random_bytes:016x}"[:24]
        return object_id
    
    def clamp(self, value: float, min_val: float, max_val: float) -> float:
        """Clamp value between min and max"""
        return max(min_val, min(max_val, value))
    
    def add_noise(self, value: float, noise_level: float = 0.05) -> float:
        """Add random noise to a value"""
        return value + (random.random() - 0.5) * value * noise_level
    
    def get_seasonal_factor(self, day_of_year: int) -> float:
        """Get seasonal variation factor (higher in summer, lower in winter)"""
        return 0.85 + 0.3 * math.sin((day_of_year - 80) * 2 * math.pi / 365)
    
    def get_orbit_phase(self, day_of_year: int, time_of_day: float) -> float:
        """Simulate orbital period of ~95 minutes"""
        orbit_phase = ((day_of_year * 24 * 60 + time_of_day * 60) % 95) / 95
        return orbit_phase
    
    def is_eclipse(self, orbit_phase: float) -> bool:
        """Check if satellite is in eclipse (roughly 35% of orbital period)"""
        return 0.32 < orbit_phase < 0.68
    
    def get_solar_intensity(self, orbit_phase: float, seasonal_factor: float) -> float:
        """Calculate solar intensity based on orbit phase and season"""
        if self.is_eclipse(orbit_phase):
            return 0
        
        # Solar intensity varies with orbit phase and season
        solar_angle = math.cos((orbit_phase - 0.5) * math.pi)
        return max(0, solar_angle * seasonal_factor)
    
    def format_number_double(self, value: float) -> Dict[str, str]:
        """Format number as MongoDB $numberDouble"""
        return {"$numberDouble": str(value)}
    
    def format_number_int(self, value: int) -> Dict[str, str]:
        """Format number as MongoDB $numberInt"""
        return {"$numberInt": str(value)}
    
    def format_object_id(self, oid: str) -> Dict[str, str]:
        """Format ObjectId as MongoDB $oid"""
        return {"$oid": oid}
    
    def format_date(self, timestamp_ms: int) -> Dict[str, Dict[str, str]]:
        """Format date as MongoDB $date"""
        return {"$date": {"$numberLong": str(timestamp_ms)}}
    
    def generate_satellite_data(self) -> List[Dict[str, Any]]:
        """Generate 365 days of satellite telemetry data in MongoDB format"""
        data = []
        start_date = datetime(2024, 1, 1)  # January 1, 2024
        
        # Generate 365 days of data
        for day in range(365):
            current_date = start_date + timedelta(days=day)
            day_of_year = day + 1
            seasonal_factor = self.get_seasonal_factor(day_of_year)
            
            # Random time of day for the data point
            hour = random.randint(0, 23)
            minute = random.randint(0, 59)
            second = random.randint(0, 59)
            
            orbit_phase = self.get_orbit_phase(day_of_year, hour + minute/60)
            eclipse = self.is_eclipse(orbit_phase)
            solar_intensity = self.get_solar_intensity(orbit_phase, seasonal_factor)
            
            # Battery degradation over time (slight capacity loss)
            battery_degradation = max(0.85, 1 - (day / 365) * 0.15)
            
            # Battery charge level (cycles with orbit and degrades over time)
            if eclipse:
                # Discharging during eclipse
                battery_charge_base = 8 + 12 * (1 - orbit_phase / 0.68)
            else:
                # Charging during sunlight
                charge_phase = (orbit_phase - 0.68) / 0.32
                battery_charge_base = 8 + 12 * min(1, charge_phase + 0.3)
            
            battery_charge = self.clamp(
                self.add_noise(battery_charge_base * battery_degradation, 0.1),
                self.ranges['battery_charge']['min'],
                self.ranges['battery_charge']['max']
            )
            
            # Battery voltages correlate with charge level
            voltage_base = 3.6 + (battery_charge / 20.5) * 0.57
            battery_cell_1_voltage = self.clamp(
                self.add_noise(voltage_base, 0.02),
                self.ranges['battery_cell_1_voltage']['min'],
                self.ranges['battery_cell_1_voltage']['max']
            )
            battery_cell_2_voltage = self.clamp(
                self.add_noise(voltage_base + 0.005, 0.02),
                self.ranges['battery_cell_2_voltage']['min'],
                self.ranges['battery_cell_2_voltage']['max']
            )
            
            # Battery current: negative when discharging, positive when charging
            if eclipse:
                battery_current_base = -0.05 - random.random() * 0.15  # Discharging
            else:
                battery_current_base = 0.02 + solar_intensity * 0.16  # Charging
            
            battery_current = self.clamp(
                self.add_noise(battery_current_base, 0.1),
                self.ranges['battery_current']['min'],
                self.ranges['battery_current']['max']
            )
            
            # Battery temperature varies with current and environment
            temp_base = (5 + random.random() * 6) if eclipse else (12 + random.random() * 5)
            current_heat = abs(battery_current) * 20
            battery_temperature = self.clamp(
                self.add_noise(temp_base + current_heat, 0.15),
                self.ranges['battery_temperature']['min'],
                self.ranges['battery_temperature']['max']
            )
            
            # Solar panel currents - individual panel variations
            panel_factors = [1.0, 0.95, 0.98, 1.02, 0.97, 1.01]
            base_current = solar_intensity * 0.35
            
            sp_currents = []
            for factor in panel_factors:
                if eclipse or random.random() < 0.1:  # Some panels might be off
                    sp_currents.append(0)
                else:
                    current = self.clamp(
                        self.add_noise(base_current * factor, 0.2),
                        0,
                        self.ranges['sp_current']['max']
                    )
                    sp_currents.append(current)
            
            # Solar panel voltages - more stable than current
            sp_voltage_base = 0 if eclipse else 3.8 + solar_intensity * 1.1
            sp_voltages = []
            for _ in range(3):  # 3 voltage pairs
                if random.random() < 0.15:
                    sp_voltages.append(0)
                else:
                    voltage = self.clamp(
                        self.add_noise(sp_voltage_base, 0.1),
                        0,
                        self.ranges['sp_voltage']['max']
                    )
                    sp_voltages.append(voltage)
            
            # EPS temperature varies with solar exposure and system load
            eps_base_temp = 15 + seasonal_factor * 8 + solar_intensity * 5
            eps_temperature = self.clamp(
                self.add_noise(eps_base_temp, 0.1),
                self.ranges['eps_temperature']['min'],
                self.ranges['eps_temperature']['max']
            )
            
            # Random callsign and grid locator
            random_callsign = random.choice(self.callsigns)
            random_grid = random.choice(self.grid_locators)
            sat_nogs = str(random.randint(1000000, 1999999)) if random.random() < 0.7 else "-"
            
            # Generate timestamps
            data_timestamp = int(current_date.timestamp() * 1000)  # milliseconds
            created_at = data_timestamp + random.randint(0, 86400000)  # Add some randomness
            updated_at = created_at
            
            # Create data point in MongoDB format
            data_point = {
                "_id": self.format_object_id(self.generate_object_id()),
                "name": "floripasat1",
                "year": self.format_number_int(current_date.year),
                "month": self.format_number_int(current_date.month),
                "day": self.format_number_int(current_date.day),
                "hour": self.format_number_int(hour),
                "minute": self.format_number_int(minute),
                "second": self.format_number_int(second),
                "battery_cell_1_voltage": self.format_number_double(round(battery_cell_1_voltage, 5)),
                "battery_cell_2_voltage": self.format_number_double(round(battery_cell_2_voltage, 5)),
                "battery_temperature": self.format_number_double(round(battery_temperature, 3)),
                "battery_current": self.format_number_double(round(battery_current, 6)),
                "battery_charge": self.format_number_double(round(battery_charge, 4)),
                "sp_01_current": self.format_number_double(round(sp_currents[0], 6)) if sp_currents[0] != 0 else self.format_number_int(0),
                "sp_02_current": self.format_number_double(round(sp_currents[1], 6)) if sp_currents[1] != 0 else self.format_number_int(0),
                "sp_03_current": self.format_number_double(round(sp_currents[2], 6)) if sp_currents[2] != 0 else self.format_number_int(0),
                "sp_04_current": self.format_number_double(round(sp_currents[3], 6)) if sp_currents[3] != 0 else self.format_number_int(0),
                "sp_05_current": self.format_number_double(round(sp_currents[4], 6)) if sp_currents[4] != 0 else self.format_number_int(0),
                "sp_06_current": self.format_number_double(round(sp_currents[5], 6)) if sp_currents[5] != 0 else self.format_number_int(0),
                "sp_01_02_voltage": self.format_number_double(round(sp_voltages[0], 5)),
                "sp_03_04_voltage": self.format_number_double(round(sp_voltages[1], 5)),
                "sp_05_06_voltage": self.format_number_double(round(sp_voltages[2], 5)),
                "energy_level": self.format_number_int(1),
                "reserved_21": "",
                "reserved_22": "",
                "reserved_23": "",
                "reserved_24": "",
                "reserved_25": "",
                "reserved_26": "",
                "reserved_27": "",
                "reserved_28": "",
                "reserved_29": "",
                "reserved_30": "",
                "reserved_31": "",
                "reserved_32": "",
                "reserved_33": "",
                "reserved_34": "",
                "reserved_35": "",
                "eps_temperature": self.format_number_double(round(eps_temperature, 4)),
                "satNOGS": sat_nogs,
                "callsign": random_callsign,
                "grid_locator": random_grid,
                "__v": self.format_number_int(0),
                "createdAt": self.format_date(created_at),
                "updatedAt": self.format_date(updated_at)
            }
            
            data.append(data_point)
        
        return data
    
    def save_mongodb_format(self, data: List[Dict[str, Any]], filename: str = "satellite_data_mongodb.json"):
        """Save data in MongoDB export format (one document per line)"""
        with open(filename, 'w') as f:
            for document in data:
                json.dump(document, f, separators=(',', ':'))
                f.write('\n')
        return filename


def main():
    """Generate and save satellite data in MongoDB format"""
    generator = SatelliteDataGeneratorMongoDB()
    print("🛰️  Generating FloripaSat-1 telemetry data for 365 days (MongoDB format)...")
    
    # Generate the data
    received_data = generator.generate_satellite_data()
    
    print(f"✅ Generated {len(received_data)} data points")
    
    # Display sample data
    print("\n📊 Sample data point (MongoDB format):")
    print(json.dumps(received_data[0], indent=2))
    
    print(f"\n📡 Data range: {received_data[0]['year']['$numberInt']}-{received_data[0]['month']['$numberInt']:0>2}-{received_data[0]['day']['$numberInt']:0>2} to {received_data[-1]['year']['$numberInt']}-{received_data[-1]['month']['$numberInt']:0>2}-{received_data[-1]['day']['$numberInt']:0>2}")
    
    # Save to MongoDB format file
    print("\n💾 Saving data in MongoDB format...")
    
    # Save as MongoDB export format (one document per line)
    filename = generator.save_mongodb_format(received_data)
    print(f"✅ Saved MongoDB export format to: {filename}")
    
    # Save as pretty JSON for readability
    with open('satellite_data_mongodb_pretty.json', 'w') as f:
        json.dump(received_data, f, indent=2)
    print("✅ Saved readable format to: satellite_data_mongodb_pretty.json")
    
    print(f"\n📋 To import into MongoDB:")
    print(f"   mongoimport --db your_database --collection satellite_data --file {filename}")
    
    return received_data


if __name__ == "__main__":
    received_data = main() 