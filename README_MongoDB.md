# FloripaSat-1 MongoDB Data Generator

## Overview
This Python script generates 365 days of realistic FloripaSat-1 satellite telemetry data in MongoDB export format with proper BSON type annotations.

## Generated Files
- `satellite_data_mongodb.json` - MongoDB import format (one document per line)
- `satellite_data_mongodb_pretty.json` - Human-readable JSON format

## Usage

### Generate Data
```bash
python3 satellite_data_generator.py
```

### Import to MongoDB
```bash
mongoimport --db your_database --collection satellite_data --file satellite_data_mongodb.json
```

## Data Format
Each document contains all the MongoDB BSON type annotations:
- `{"$oid":"..."}` for ObjectIds
- `{"$numberInt":"..."}` for integers  
- `{"$numberDouble":"..."}` for floating point numbers
- `{"$date":{"$numberLong":"..."}}` for timestamps

## Sample Document Structure
```json
{
  "_id": {"$oid": "6882404df79ec71bf5fbd143"},
  "name": "floripasat1",
  "year": {"$numberInt": "2024"},
  "month": {"$numberInt": "1"},
  "day": {"$numberInt": "1"},
  "hour": {"$numberInt": "8"},
  "minute": {"$numberInt": "29"},
  "second": {"$numberInt": "40"},
  "battery_cell_1_voltage": {"$numberDouble": "3.90405"},
  "battery_cell_2_voltage": {"$numberDouble": "3.93639"},
  "battery_temperature": {"$numberDouble": "11.148"},
  "battery_current": {"$numberDouble": "-0.121783"},
  "battery_charge": {"$numberDouble": "11.1983"},
  "sp_01_current": {"$numberInt": "0"},
  "sp_02_current": {"$numberInt": "0"},
  "sp_03_current": {"$numberInt": "0"},
  "sp_04_current": {"$numberInt": "0"},
  "sp_05_current": {"$numberInt": "0"},
  "sp_06_current": {"$numberInt": "0"},
  "sp_01_02_voltage": {"$numberDouble": "0"},
  "sp_03_04_voltage": {"$numberDouble": "0"},
  "sp_05_06_voltage": {"$numberDouble": "0"},
  "energy_level": {"$numberInt": "1"},
  "eps_temperature": {"$numberDouble": "19.2489"},
  "satNOGS": "1297480",
  "callsign": "K4KDR",
  "grid_locator": "JN49lr",
  "__v": {"$numberInt": "0"},
  "createdAt": {"$date": {"$numberLong": "1704114008011"}},
  "updatedAt": {"$date": {"$numberLong": "1704114008011"}}
}
```

## Data Features
✅ **365 days of data** (full year simulation)  
✅ **Realistic orbital mechanics** (95-minute orbit periods)  
✅ **Eclipse simulation** (35% of orbit in shadow)  
✅ **Battery charge/discharge cycles**  
✅ **Solar panel performance variations**  
✅ **Seasonal effects**  
✅ **HAM radio callsigns and grid locators**  
✅ **MongoDB-compatible format**  
✅ **BSON type annotations**  
✅ **Unique ObjectIds**  
✅ **Realistic timestamps**  

## Total Output
- 📊 **365 data points** (one per day)
- 🗃️ **Ready for MongoDB import**
- 📈 **All telemetry fields included**
- 🛰️ **Realistic satellite behavior simulation** 