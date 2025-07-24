import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

type Props = {
  selected: string;
  onSelect: (Key: string) => void;
}

const categories = ['全部', '老年护理', '康复护理', '慢病管理', '术后护理'];

const CategoryFilter: React.FC<Props> = ({ selected, onSelect }) => {
  return (
    <View style={styles.container}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[styles.button, selected === cat && styles.selected]}
          onPress={() => onSelect(cat)}
        >
          <Text style={[
            styles.buttonText, 
            selected === cat && styles.selectedText
          ]}>
            {cat}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 12,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  selected: {
    backgroundColor: '#2E7D5A',
    borderColor: '#2E7D5A',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
  selectedText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default CategoryFilter;