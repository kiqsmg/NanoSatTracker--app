import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ViewStyle } from 'react-native';
import { Layout } from './Layout';

interface ChartSectionProps {
  title: string;
  legends: string[];
  onMonthPress: (index: number) => void;
  children: React.ReactNode;
}

interface ChartLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const ChartSection: React.FC<ChartSectionProps> = ({
  title,
  legends,
  onMonthPress,
  children,
}) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      
      {legends.map((legend, index) => (
        <Text key={index} style={styles.legendText}>{legend}</Text>
      ))}

      <View style={styles.buttonContainer}>
        {months.map((month, index) => (
          <TouchableOpacity
            key={index}
            style={styles.monthButton}
            onPress={() => onMonthPress(index)}
          >
            <Text style={styles.monthButtonText}>{month}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.chartContainer}>
        {children}
      </View>
    </View>
  );
};

export const ChartLayout: React.FC<ChartLayoutProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <Layout 
      title={title}
      subtitle={subtitle}
      contentStyle={styles.chartLayoutContent}
    >
      <View style={styles.chartLayoutContainer}>
        {children}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  chartLayoutContent: {
    paddingHorizontal: 0,
  },
  chartLayoutContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 22,
    color: '#A3C4F3',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  legendText: {
    color: '#8FC7FF',
    fontWeight: '600',
    marginBottom: 6,
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  monthButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
    backgroundColor: '#86abe1',
    borderRadius: 8,
    minWidth: 44,
    alignItems: 'center',
  },
  monthButtonText: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '600',
  },
  chartContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginHorizontal: 4,
    marginTop: 8,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 3,
  },
}); 