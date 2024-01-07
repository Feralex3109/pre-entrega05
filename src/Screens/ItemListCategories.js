import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";
import Header from "../Components/Header";
import Search from "../Components/Search";
import allProducts from "../Data/products.json";
import ProductItem from "../Components/ProductItem";

const ItemListCategories = ({ category }) => {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState(allProducts);

  useEffect(() => {
    if (category) {
      const productsCategory = allProducts.filter(
        (product) => product.category === category
      );
      const productsFiltered = productsCategory.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setProducts(productsFiltered);
    } else {
      const productsFiltered = allProducts.filter((product) =>
        product.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setProducts(productsFiltered);
    }
  }, [category, keyword]);

  return (
    <>
      <Header />
      <Search setKeyword={setKeyword} />
      <FlatList
        style={styles.container}
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </>
  );
};

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
