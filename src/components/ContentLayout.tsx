import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import { Layout } from './Layout';

interface ContentSectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  style?: ViewStyle;
}

interface ContentCardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  style?: ViewStyle;
}

interface ImagePlaceholderProps {
  width: number;
  height: number;
  backgroundColor: string;
  label: string;
  sublabel?: string;
  style?: ViewStyle;
}

interface ContentLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  children,
  style,
}) => {
  return (
    <View style={[styles.section, style]}>
      {title && <Text style={styles.sectionTitle}>{title}</Text>}
      {subtitle && <Text style={styles.sectionSubtitle}>{subtitle}</Text>}
      {children}
    </View>
  );
};

export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  subtitle,
  children,
  backgroundColor = '#16213E',
  style,
}) => {
  return (
    <View style={[styles.card, { backgroundColor }, style]}>
      {title && <Text style={styles.cardTitle}>{title}</Text>}
      {subtitle && <Text style={styles.cardSubtitle}>{subtitle}</Text>}
      {children}
    </View>
  );
};

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  width,
  height,
  backgroundColor,
  label,
  sublabel,
  style,
}) => {
  return (
    <View style={styles.imageContainer}>
      <View 
        style={[
          styles.imagePlaceholder,
          { width, height, backgroundColor },
          style
        ]}
      >
        <Text style={styles.imageLabel}>{label}</Text>
        {sublabel && <Text style={styles.imageSublabel}>{sublabel}</Text>}
      </View>
    </View>
  );
};

export const ContentLayout: React.FC<ContentLayoutProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <Layout 
      title={title}
      subtitle={subtitle}
      contentStyle={styles.contentLayoutStyle}
    >
      <View style={styles.contentContainer}>
        {children}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  contentLayoutStyle: {
    paddingHorizontal: 0,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066CC',
    marginBottom: 8,
    marginLeft: 8,
  },
  sectionSubtitle: {
    fontSize: 18,
    color: '#8FC7FF',
    fontWeight: '600',
    marginBottom: 16,
    marginLeft: 20,
  },
  card: {
    borderRadius: 12,
    padding: 8,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0066CC',
    marginBottom: 4,
    marginLeft: 8,
  },
  cardSubtitle: {
    fontSize: 16,
    color: '#8FC7FF',
    fontWeight: '600',
    marginBottom: 16,
    marginLeft: 16,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  imagePlaceholder: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 4,
  },
  imageLabel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  imageSublabel: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
    opacity: 0.9,
  },
}); 