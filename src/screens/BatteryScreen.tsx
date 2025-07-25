import React, { useRef, useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { ChartLayout, ChartSection } from '../components';
import { SatelliteData, ChartDataPoint } from '../types';

const BatteryScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [formattedData, setFormattedData] = useState<{data: ChartDataPoint[]}[]>([]);
  const [receivedData, setReceivedData] = useState<SatelliteData[]>([]);

  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const ref3 = useRef<any>(null);

  // Calculate month start positions in the data array
  const getMonthStartIndex = (monthIndex: number, data: SatelliteData[]) => {
    const targetMonth = monthIndex + 1; // Convert 0-based to 1-based month
    const startIndex = data.findIndex(item => item.month === targetMonth);
    return startIndex >= 0 ? startIndex : 0;
  };

  // Calculate scroll position based on data index
  const calculateScrollPosition = (dataIndex: number, initialSpacing: number = 20) => {
    // Approximate spacing between data points in the chart
    const dataPointSpacing = 60; // Adjust this based on your chart's actual spacing
    return initialSpacing + (dataIndex * dataPointSpacing) - 100; // -100 to center the view
  };

  useEffect(() => {  
    fetch("https://nanosattracker-backend.onrender.com/floripasat1/downlink")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((received_Data: SatelliteData[]) => {
        // Store the received data for month calculations
        setReceivedData(received_Data);

        const line_battery_cell_1_voltage = received_Data.map(item => ({
            value: item.battery_cell_1_voltage,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_battery_cell_2_voltage = received_Data.map(item => ({
            value: item.battery_cell_2_voltage,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_battery_charge = received_Data.map(item => ({
            value: item.battery_charge,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_battery_current = received_Data.map(item => ({
            value: item.battery_current,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_battery_temperature = received_Data.map(item => ({
            value: item.battery_temperature,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));

        setFormattedData([
          { data: line_battery_cell_1_voltage },
          { data: line_battery_cell_2_voltage },
          { data: line_battery_charge },
          { data: line_battery_current },
          { data: line_battery_temperature }
        ]);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0e580e" />
      </View>
    );
  }

  if (error) {
    return (
      <ChartLayout title="Battery Data" subtitle="Error loading data">
        <View style={styles.errorContainer}>
          <ActivityIndicator size="large" color="#ff3333" />
        </View>
      </ChartLayout>
    );
  }
  
  const lineData1 = formattedData[0]?.data || [];
  const lineData2 = formattedData[1]?.data || [];
  const lineData3 = formattedData[2]?.data || [];
  const lineData4 = formattedData[3]?.data || [];
  const lineData5 = formattedData[4]?.data || [];

  const showOrHidePointer1 = (monthIndex: number) => {
    if (receivedData.length > 0) {
      const dataIndex = getMonthStartIndex(monthIndex, receivedData);
      const scrollPosition = calculateScrollPosition(dataIndex, 20);
      ref1.current?.scrollTo({
        x: Math.max(0, scrollPosition),
        animated: true,
      });
    }
  };

  const showOrHidePointer2 = (monthIndex: number) => {
    if (receivedData.length > 0) {
      const dataIndex = getMonthStartIndex(monthIndex, receivedData);
      const scrollPosition = calculateScrollPosition(dataIndex, 20);
      ref2.current?.scrollTo({
        x: Math.max(0, scrollPosition),
        animated: true,
      });
    }
  };

  const showOrHidePointer3 = (monthIndex: number) => {
    if (receivedData.length > 0) {
      const dataIndex = getMonthStartIndex(monthIndex, receivedData);
      const scrollPosition = calculateScrollPosition(dataIndex, 20);
      ref3.current?.scrollTo({
        x: Math.max(0, scrollPosition),
        animated: true,
      });
    }
  };

  return (
    <ChartLayout 
      title="Battery Data" 
      subtitle="Real-time satellite battery telemetry"
    >
      {/* Voltage Chart */}
      <ChartSection
        title="Battery Voltage"
        legends={[
          "Cell 01 voltage [V]: blue",
          "Cell 02 voltage [V]: orange"
        ]}
        onMonthPress={showOrHidePointer1}
      >
        <LineChart
          scrollRef={ref1}
          data={lineData1}
          data2={lineData2}
          curved
          isAnimated
          color1="blue"
          color2="orange"
          initialSpacing={20}
          maxValue={1}
          yAxisOffset={3.5}
          rotateLabel
          noOfSections={6}
          xAxisLabelsVerticalShift={35}
          xAxisLabelTextStyle={{
            color: '#333333',
            fontSize: 11,
            fontWeight: '500',
            textAlign: 'center',
          }}
        />
      </ChartSection>

      {/* Charge & Current Chart */}
      <ChartSection
        title="Battery Charge & Current"
        legends={[
          "Charge: blue",
          "Current [A]: orange"
        ]}
        onMonthPress={showOrHidePointer2}
      >
        <LineChart
          scrollRef={ref2}
          data={lineData3}
          data2={lineData4}
          curved
          isAnimated
          color1="blue"
          color2="orange"
          initialSpacing={20}
          maxValue={22}
          yAxisOffset={-1}
          rotateLabel
          noOfSections={6}
          xAxisLabelsVerticalShift={35}
          xAxisLabelTextStyle={{
            color: '#333333',
            fontSize: 11,
            fontWeight: '500',
            textAlign: 'center',
          }}
        />
      </ChartSection>

      {/* Temperature Chart */}
      <ChartSection
        title="Battery Temperature"
        legends={["Temperature [ºC]: blue"]}
        onMonthPress={showOrHidePointer3}
      >
        <LineChart
          scrollRef={ref3}
          data={lineData5}
          curved
          isAnimated
          color1="blue"
          initialSpacing={20}
          maxValue={20}
          yAxisOffset={0}
          rotateLabel
          noOfSections={6}
          xAxisLabelsVerticalShift={35}
          xAxisLabelTextStyle={{
            color: '#333333',
            fontSize: 11,
            fontWeight: '500',
            textAlign: 'center',
          }}
        />
      </ChartSection>
    </ChartLayout>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  errorContainer: {
    padding: 40,
    alignItems: 'center',
  },
});

export default BatteryScreen; 