import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const OrderSummary = ({ totalCount }) => {
  const isDiscountEligible = totalCount >= 5;

  return (
    <View style={styles.summaryCard}>
      <Text style={styles.titleText}>Total Item Dipesan: {totalCount}</Text>
      {isDiscountEligible && (
        <View style={styles.promoContainer}>
          <Text style={styles.promoText}>🎉 Selamat! Anda Mendapatkan Diskon 10%</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#E6E1D6',
    alignItems: 'center',
    marginVertical: 8,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E1B18',
  },
  promoContainer: {
    marginTop: 8,
    backgroundColor: '#EAF7EE',
    borderWidth: 1,
    borderColor: '#C3E8CC',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  promoText: {
    color: '#1F7A4C',
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default OrderSummary;
