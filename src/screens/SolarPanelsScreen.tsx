import React, { useRef, useState, useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { LineChart } from "react-native-gifted-charts";
import { ChartLayout, ChartSection } from '../components';
import { SatelliteData, ChartDataPoint } from '../types';

const SolarPanelsScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [formattedData, setFormattedData] = useState<{data: ChartDataPoint[]}[]>([]);
  const [receivedData, setReceivedData] = useState<SatelliteData[]>([]);

  const ref1 = useRef<any>(null);
  const ref1b = useRef<any>(null);
  const ref2 = useRef<any>(null);

  // Calculate month start positions in the data array
  const getMonthStartIndex = (monthIndex: number, data: SatelliteData[]) => {
    const targetMonth = monthIndex + 1; // Convert 0-based to 1-based month
    const startIndex = data.findIndex(item => item.month === targetMonth);
    console.log(`Month ${targetMonth} starts at index: ${startIndex} out of ${data.length} total points`);
    return startIndex >= 0 ? startIndex : 0;
  };

  // Calculate scroll position based on data index - simplified approach
  const calculateScrollPosition = (dataIndex: number, totalDataPoints: number) => {
    // Use the same spacing as the chart's initialSpacing
    const initialSpacing = 20;
    const dataPointWidth = 50; // Approximate width per data point in the chart
    
    // Simple linear calculation
    const scrollX = initialSpacing + (dataIndex * dataPointWidth);
    
    console.log(`Scrolling to month: dataIndex=${dataIndex}, scrollX=${scrollX}`);
    return Math.max(0, scrollX);
  };

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
        // Sort data by date to ensure proper month ordering
        const sortedData = received_Data.sort((a, b) => {
          const dateA = new Date(a.year, a.month - 1, a.day);
          const dateB = new Date(b.year, b.month - 1, b.day);
          return dateA.getTime() - dateB.getTime();
        });
        
        // Store the sorted data for month calculations
        setReceivedData(sortedData);

        // Filtering the data (using sorted data)
        const line_sp_01_current = sortedData.map(item => ({
          value: item.sp_01_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_sp_02_current = sortedData.map(item => ({
          value: item.sp_02_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_sp_03_current = sortedData.map(item => ({
          value: item.sp_03_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_sp_04_current = sortedData.map(item => ({
          value: item.sp_04_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_sp_05_current = sortedData.map(item => ({
          value: item.sp_05_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));
  
        const line_sp_06_current = sortedData.map(item => ({
          value: item.sp_06_current,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().slice(-2)}`
        }));

        const line_sp_01_02_voltage = sortedData.map(item => ({
          value: item.sp_01_02_voltage,
          label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_sp_03_04_voltage = sortedData.map(item => ({
            value: item.sp_03_04_voltage,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));
        
        const line_sp_05_06_voltage = sortedData.map(item => ({
            value: item.sp_05_06_voltage,
            label: `${item.day.toString().padStart(2, '0')}-${item.month.toString().padStart(2, '0')}-${item.year.toString().padStart(2, '0')}`
        }));

        // Now set data to state
        setFormattedData([
          { data: line_sp_01_current },
          { data: line_sp_02_current },
          { data: line_sp_03_current },
          { data: line_sp_04_current },
          { data: line_sp_05_current },
          { data: line_sp_06_current },
          { data: line_sp_01_02_voltage },
          { data: line_sp_03_04_voltage },
          { data: line_sp_05_06_voltage },
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
      <ChartLayout title="Solar Panels Data" subtitle="Error loading data">
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
  const lineData6 = formattedData[5]?.data || [];
  const lineData7 = formattedData[6]?.data || [];
  const lineData8 = formattedData[7]?.data || [];
  const lineData9 = formattedData[8]?.data || [];

  const showOrHidePointer1 = (monthIndex: number) => {
    if (receivedData.length > 0) {
      const dataIndex = getMonthStartIndex(monthIndex, receivedData);
      const scrollPosition = calculateScrollPosition(dataIndex, receivedData.length);
      ref1.current?.scrollTo({
        x: Math.max(0, scrollPosition),
        animated: true,
      });
    }
  };

  const showOrHidePointer1b = (monthIndex: number) => {
    if (receivedData.length > 0) {
      const dataIndex = getMonthStartIndex(monthIndex, receivedData);
      const scrollPosition = calculateScrollPosition(dataIndex, receivedData.length);
      ref1b.current?.scrollTo({
        x: Math.max(0, scrollPosition),
        animated: true,
      });
    }
  };
  
  const showOrHidePointer2 = (monthIndex: number) => {
    if (receivedData.length > 0) {
      const dataIndex = getMonthStartIndex(monthIndex, receivedData);
      const scrollPosition = calculateScrollPosition(dataIndex, receivedData.length);
      ref2.current?.scrollTo({
        x: Math.max(0, scrollPosition),
        animated: true,
      });
    }
  };

  return (
    <ChartLayout 
      title="Solar Panels Data" 
      subtitle="Real-time solar panel telemetry"
    >
      {/* Solar Panel Current Chart - Panels 1-3 */}
      <ChartSection
        title="Solar Panels Current (1-3)"
        legends={[
          "Solar Panel-01 [A]: blue",
          "Solar Panel-02 [A]: orange", 
          "Solar Panel-03 [A]: red"
        ]}
        onMonthPress={showOrHidePointer1}
      >
        <LineChart
          scrollRef={ref1}
          data={lineData1}
          data2={lineData2}
          data3={lineData3}
          curved
          isAnimated
          color1="blue"
          color2="orange"
          color3="red"
          initialSpacing={20}
          maxValue={0.6}
          yAxisOffset={-0.05}
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

      {/* Solar Panel Current Chart - Panels 4-6 */}
      <ChartSection
        title="Solar Panels Current (4-6)"
        legends={[
          "Solar Panel-04 [A]: green",
          "Solar Panel-05 [A]: orange",
          "Solar Panel-06 [A]: red"
        ]}
        onMonthPress={showOrHidePointer1b}
      >
        <LineChart
          scrollRef={ref1b}
          data={lineData4}
          data2={lineData5}
          data3={lineData6}
          curved
          isAnimated
          color1="green"
          color2="orange"
          color3="red"
          initialSpacing={20}
          maxValue={0.6}
          yAxisOffset={-0.05}
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

      {/* Solar Panel Voltage Chart */}
      <ChartSection
        title="Solar Panels Voltage"
        legends={[
          "Solar Panel-01-02 [V]: blue",
          "Solar Panel-03-04 [V]: orange",
          "Solar Panel-05-06 [V]: red"
        ]}
        onMonthPress={showOrHidePointer2}
      >
        <LineChart
          scrollRef={ref2}
          data={lineData7}
          data2={lineData8}
          data3={lineData9}
          curved
          isAnimated
          color1="blue"
          color2="orange"
          color3="red"
          initialSpacing={20}
          maxValue={6}
          yAxisOffset={-0.5}
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

export default SolarPanelsScreen; 