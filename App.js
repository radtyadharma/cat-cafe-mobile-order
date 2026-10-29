import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import MenuItem from './components/MenuItem';
import OrderSummary from './components/OrderSummary';

const DAFTAR_MENU = [
  { id: '1', nama: 'Kopi Susu Catnip', harga: 20000 },
  { id: '2', nama: 'Matcha Paw Latte', harga: 25000 },
  { id: '3', nama: 'Croissant Ikan Tuna', harga: 18000 },
];

export default function App() {
  const [totalPesanan, setTotalPesanan] = useState(0);

  const handleTambahPesanan = () => {
    setTotalPesanan(prevTotal => prevTotal + 1);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FDFBF7" />
      <View style={styles.mainContainer}>
        <View style={styles.headerArea}>
          <Text style={styles.badgeText}>Aplikasi Pemesanan</Text>
          <Text style={styles.headerTitle}>🐾 Kafe Kucing</Text>
          <Text style={styles.headerSubtitle}>Pilih menu favorit untuk menemani harimu</Text>
        </View>

        <OrderSummary totalCount={totalPesanan} />

        <Text style={styles.catalogHeading}>Katalog Menu</Text>

        <ScrollView
          style={styles.scrollList}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {DAFTAR_MENU.map(menuItem => (
            <MenuItem
              key={menuItem.id}
              nama={menuItem.nama}
              harga={menuItem.harga}
              onTambahPesanan={handleTambahPesanan}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FDFBF7',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 16,
  },
  headerArea: {
    marginBottom: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#D96B27',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1E1B18',
    marginTop: 2,
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#736B63',
    marginTop: 2,
  },
  catalogHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E1B18',
    marginTop: 6,
    marginBottom: 10,
  },
  scrollList: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 28,
  },
});
