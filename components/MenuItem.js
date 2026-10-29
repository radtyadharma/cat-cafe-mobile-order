import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MenuItem = ({ nama, harga, onTambahPesanan }) => {
  const [qty, setQty] = useState(0);

  const handlePressTambah = () => {
    setQty(prevQty => prevQty + 1);
    if (typeof onTambahPesanan === 'function') {
      onTambahPesanan();
    }
  };

  return (
    <View style={styles.menuCard}>
      <View style={styles.detailsWrapper}>
        <Text style={styles.menuName}>{nama}</Text>
        <Text style={styles.menuPrice}>Rp {harga.toLocaleString('id-ID')}</Text>
        <Text style={styles.orderCount}>Dipesan: {qty}</Text>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        onPress={handlePressTambah}
        activeOpacity={0.75}
      >
        <Text style={styles.addButtonText}>Tambah Pesanan</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuCard: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E6E1D6',
  },
  detailsWrapper: {
    flex: 1,
    paddingRight: 12,
  },
  menuName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E1B18',
  },
  menuPrice: {
    fontSize: 13,
    color: '#D96B27',
    fontWeight: '600',
    marginTop: 3,
  },
  orderCount: {
    fontSize: 12,
    color: '#736B63',
    marginTop: 4,
  },
  addButton: {
    backgroundColor: '#1E1B18',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 13,
  },
});

export default MenuItem;
