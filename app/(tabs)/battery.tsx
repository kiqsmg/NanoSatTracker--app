import React, { useRef, useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { ChartLayout, ChartSection } from '../../src/components';
import { SatelliteData, ChartDataPoint } from '../../src/types';

export default function Battery() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [formattedData, setFormattedData] = useState<{data: ChartDataPoint[]}[]>([]);

  const ref1 = useRef<any>(null);
  const ref2 = useRef<any>(null);
  const ref3 = useRef<any>(null);

  useEffect(() => {
    console.log("Fetching data...");
  
    fetch("https://nanosattracker-backend.onrender.com/floripasat1/downlink")
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((received_Data: SatelliteData[]) => {
        // Filtering the data
        const line_battery_cell_1_voltage = received_Data.map(item => ({
          value: item.battery_cell_1_voltage,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_battery_cell_2_voltage = received_Data.map(item => ({
          value: item.battery_cell_2_voltage,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_battery_charge = received_Data.map(item => ({
          value: item.battery_charge,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_battery_current = received_Data.map(item => ({
          value: item.battery_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_battery_temperature = received_Data.map(item => ({
          value: item.battery_temperature,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));

        // Now set data to state
        setFormattedData([
          { data: line_battery_cell_1_voltage },
          { data: line_battery_cell_2_voltage },
          { data: line_battery_charge },
          { data: line_battery_current },
          { data: line_battery_temperature },
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

  const showOrHidePointer1 = (index: number) => {
    ref1.current?.scrollTo({
      x: index * 200 - 25,
    });
  };
  
  const showOrHidePointer2 = (index: number) => {
    ref2.current?.scrollTo({
      x: index * 200 - 25,
    });
  };

  const showOrHidePointer3 = (index: number) => {
    ref3.current?.scrollTo({
      x: index * 200 - 25,
    });
  };

  return (
    <ChartLayout 
      title="Battery Data" 
      subtitle="Real-time battery telemetry"
    >
      {/* Battery Voltage Chart */}
      <ChartSection
        title="Battery Voltage"
        legends={[
          "Battery Cell 1 [V]: blue",
          "Battery Cell 2 [V]: orange"
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
          maxValue={4.5}
          yAxisOffset={-0.5}
          rotateLabel
          noOfSections={6}
          xAxisLabelsVerticalShift={20}
          xAxisLabelTextStyle={{
            alignSelf: 'flex-end',
            marginRight: -35,
            marginTop: -25,
          }}
        />
      </ChartSection>

      {/* Battery Charge & Current Chart */}
      <ChartSection
        title="Battery Charge & Current"
        legends={[
          "Battery Charge [%]: blue",
          "Battery Current [A]: orange"
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
          maxValue={110}
          yAxisOffset={-10}
          rotateLabel
          noOfSections={6}
          xAxisLabelsVerticalShift={20}
          xAxisLabelTextStyle={{
            alignSelf: 'flex-end',
            marginRight: -35,
            marginTop: -25,
          }}
        />
      </ChartSection>

      {/* Battery Temperature Chart */}
      <ChartSection
        title="Battery Temperature"
        legends={[
          "Battery Temperature [°C]: blue"
        ]}
        onMonthPress={showOrHidePointer3}
      >
        <LineChart
          scrollRef={ref3}
          data={lineData5}
          curved
          isAnimated
          color1="blue"
          initialSpacing={20}
          maxValue={50}
          yAxisOffset={-5}
          rotateLabel
          noOfSections={6}
          xAxisLabelsVerticalShift={20}
          xAxisLabelTextStyle={{
            alignSelf: 'flex-end',
            marginRight: -35,
            marginTop: -25,
          }}
        />
      </ChartSection>
    </ChartLayout>
  );
}

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