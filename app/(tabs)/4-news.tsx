import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

const newsData = [
  {
    id: 1,
    title: '老年护理新技术：智能监护设备的应用',
    summary: '了解最新的智能监护技术如何改善老年人的护理质量...',
    category: '技术创新',
    time: '2小时前',
    image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 2,
    title: '家庭护理指南：如何照顾卧床病人',
    summary: '专业护理师分享家庭护理的实用技巧和注意事项...',
    category: '护理指南',
    time: '4小时前',
    image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    title: '营养护理：术后康复期的饮食建议',
    summary: '营养专家为术后患者提供科学的饮食康复方案...',
    category: '营养健康',
    time: '6小时前',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 4,
    title: '心理护理：如何帮助患者保持积极心态',
    summary: '心理健康专家分享护理过程中的心理支持技巧...',
    category: '心理健康',
    time: '8小时前',
    image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

const categories = ['全部', '技术创新', '护理指南', '营养健康', '心理健康'];

export default function NewsScreen() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#2E7D5A" />
      
      {/* Header */}
      <LinearGradient
        colors={['#2E7D5A', '#4A9B6E']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <View style={styles.headerTop}>
            <View>
              <Text style={styles.headerTitle}>护理资讯</Text>
              <Text style={styles.headerSubtitle}>获取最新的护理知识和资讯</Text>
            </View>
            <MaterialIcons name="article" size={28} color="#FFFFFF" />
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Category Filter */}
        <View style={styles.categorySection}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryContainer}
          >
            {categories.map((category, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.categoryButton,
                  index === 0 && styles.categoryButtonActive
                ]}
              >
                <Text style={[
                  styles.categoryText,
                  index === 0 && styles.categoryTextActive
                ]}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Featured Article */}
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>
            <MaterialIcons name="star" size={20} color="#2E7D5A" /> 精选文章
          </Text>
          <TouchableOpacity style={styles.featuredCard}>
            <Image 
              source={{ uri: newsData[0].image }} 
              style={styles.featuredImage}
            />
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,0.7)']}
              style={styles.featuredOverlay}
            >
              <View style={styles.featuredContent}>
                <View style={styles.featuredCategory}>
                  <Text style={styles.featuredCategoryText}>{newsData[0].category}</Text>
                </View>
                <Text style={styles.featuredTitle}>{newsData[0].title}</Text>
                <Text style={styles.featuredTime}>
                  <MaterialIcons name="access-time" size={14} color="#FFFFFF" /> {newsData[0].time}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* News List */}
        <View style={styles.newsSection}>
          <Text style={styles.sectionTitle}>
            <MaterialIcons name="newspaper" size={20} color="#2E7D5A" /> 最新资讯
          </Text>
          {newsData.slice(1).map((article) => (
            <TouchableOpacity key={article.id} style={styles.newsCard}>
              <Image source={{ uri: article.image }} style={styles.newsImage} />
              <View style={styles.newsContent}>
                <View style={styles.newsHeader}>
                  <View style={styles.newsCategory}>
                    <Text style={styles.newsCategoryText}>{article.category}</Text>
                  </View>
                  <Text style={styles.newsTime}>
                    <MaterialIcons name="access-time" size={12} color="#999" /> {article.time}
                  </Text>
                </View>
                <Text style={styles.newsTitle}>{article.title}</Text>
                <Text style={styles.newsSummary}>{article.summary}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContent: {
    flex: 1,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    marginTop: 4,
  },
  categorySection: {
    paddingVertical: 20,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    gap: 12,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  categoryButtonActive: {
    backgroundColor: '#2E7D5A',
    borderColor: '#2E7D5A',
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666666',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  featuredSection: {
    paddingHorizontal: 20,
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredCard: {
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
    position: 'relative',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '60%',
    justifyContent: 'flex-end',
  },
  featuredContent: {
    padding: 20,
  },
  featuredCategory: {
    backgroundColor: '#2E7D5A',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  featuredCategoryText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
    lineHeight: 24,
  },
  featuredTime: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  newsSection: {
    paddingHorizontal: 20,
  },
  newsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  newsImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  newsContent: {
    padding: 16,
  },
  newsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  newsCategory: {
    backgroundColor: '#E8F5E8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  newsCategoryText: {
    color: '#2E7D5A',
    fontSize: 10,
    fontWeight: '600',
  },
  newsTime: {
    fontSize: 12,
    color: '#999999',
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
    lineHeight: 22,
  },
  newsSummary: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  bottomSpacing: {
    height: 20,
  },
});