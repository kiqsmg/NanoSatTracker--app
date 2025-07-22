# Layout Patterns Usage Guide

This guide explains how to use the layout components for consistent screen design across all tabs.

## Available Layout Components

### 1. Layout (Base Layout)
The foundation layout component that provides:
- SafeAreaView wrapper
- Optional ScrollView
- Consistent background colors
- Header with title and subtitle

### 2. ChartLayout + ChartSection 
For data visualization screens like Battery and Solar Panels:
- Consistent chart containers
- Month navigation buttons
- Legend text styling
- Multiple chart sections

### 3. ContentLayout + ContentSection + ContentCard
For informational screens like FloripaSat1 and Overall:
- Content sections with titles/subtitles
- Styled content cards
- Image placeholders
- Consistent spacing

## Usage Examples

### Chart-based Screens (Battery, Solar Panels)

```tsx
import { ChartLayout, ChartSection } from '../components';

const DataScreen = () => {
  const handleMonthPress = (index: number) => {
    // Handle month selection
  };

  return (
    <ChartLayout title="Data Screen" subtitle="Real-time telemetry">
      <ChartSection
        title="Chart Title"
        legends={["Legend 1: blue", "Legend 2: orange"]}
        onMonthPress={handleMonthPress}
      >
        <LineChart {...chartProps} />
      </ChartSection>
    </ChartLayout>
  );
};
```

### Content-based Screens (FloripaSat1, Overall)

```tsx
import { ContentLayout, ContentSection, ContentCard, ImagePlaceholder } from '../components';

const InfoScreen = () => {
  return (
    <ContentLayout title="Info Screen" subtitle="Detailed information">
      <ImagePlaceholder
        width={200}
        height={200}
        backgroundColor="#2563eb"
        label="Image Title"
        sublabel="Description"
      />
      
      <ContentCard>
        <Text style={styles.cardText}>Your content here...</Text>
      </ContentCard>
      
      <ContentSection title="Section" subtitle="Subsection">
        <ContentCard>
          <Text style={styles.cardText}>Section content...</Text>
        </ContentCard>
      </ContentSection>
    </ContentLayout>
  );
};
```

### Simple Screens (Profile)

```tsx
import { Layout } from '../components';

const SimpleScreen = () => {
  return (
    <Layout title="Simple Screen" showScrollView={false}>
      <View style={styles.content}>
        {/* Your custom content */}
      </View>
    </Layout>
  );
};
```

## Converting Existing Screens

To convert remaining screens to use these patterns:

1. **SolarPanelsScreen**: Use `ChartLayout` + `ChartSection` (same as Battery)
2. **OverallScreen**: Use `ContentLayout` + `ContentCard` for ham radio info
3. **ProfileScreen**: Use `Layout` for simple centered content

## Benefits

- ✅ Consistent styling across all tabs
- ✅ Reduced code duplication
- ✅ Easy maintenance and updates
- ✅ Responsive design patterns
- ✅ Proper spacing and typography
- ✅ Built-in loading and error states 