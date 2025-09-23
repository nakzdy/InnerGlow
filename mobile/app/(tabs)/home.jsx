import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";

const Home = () => {

  const [activeTab, setActiveTab] = useState("forYou");

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => setActiveTab("forYou")}>
          <Text style={[ styles.tabText, activeTab === "forYou" && styles.activeTabText, ]}>
            For you
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setActiveTab("following")}>
          <Text style={[ styles.tabText, activeTab === "following" && styles.activeTabText, ]}>
            Following
          </Text>
        </TouchableOpacity>
      </View>


      <View style={styles.content}>
        {activeTab === "forYou" ? (
          <ScrollView>
            <View style={styles.grid}>
              {/*-------- Left Column --------*/}
              <View style={styles.column}>
                <TouchableOpacity>
                  <Image
                    source={require("../(tabs)/assets/images/1image.png")}
                    style={[styles.image, { height: 174 }]} 
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("../(tabs)/assets/images/3image.png")}
                    style={[styles.image, { height: 280 }]}
                  />
                  <Text style={{ marginBottom: 10, fontSize: 16 }}>Paid Link</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                   source={require("../(tabs)/assets/images/5image.png")}
                   style={[styles.image, { height: 174 }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                   source={require("../(tabs)/assets/images/7image.png")}
                   style={[styles.image, { height: 60 , opacity: 0.7 }]} 
                 /> 
                 <Text style={{ position: "absolute" , right: 40, fontSize: 16, marginTop: 18, fontWeight: 80 }}>More like this</Text>
                </TouchableOpacity>
              </View>

              {/*-------- Right Column --------*/}
              <View style={styles.column}>
                <TouchableOpacity>
                  <Image
                    source={require("../(tabs)/assets/images/2image.png")}
                    style={[styles.image, { height: 280 }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("../(tabs)/assets/images/4image.png")}
                    style={[styles.image, { height: 101 }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    source={require("../(tabs)/assets/images/6image.png")}
                    style={[styles.image, { height: 280 }]}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                   source={require("../(tabs)/assets/images/8image.png")}
                   style={[styles.image, { height: 60 , opacity: 0.7 }]} 
                 /> 
                 <Text style={{ position: "absolute" , right: 40, fontSize: 16, marginTop: 18, fontWeight: 50 }}>More like this</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        ) : (
          <Text style={styles.following}>Follow people to see their post here.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
    backgroundColor: "#ffe6ef",
  },
  tabText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#999",
  },
  activeTabText: {
    color: "#d14d72",
    fontWeight: "700",
    borderBottomWidth: 2,
    borderBottomColor: "#d14d72",
    paddingBottom: 5,
  },
  content: {
    flex: 1,
  },
  grid: {
    flexDirection: "row", // side-by-side columns
    justifyContent: "space-between",
    padding: 10,
  },
  column: {
    flex: 1, // each column takes half width
    marginHorizontal: 5, 
  },
  image: {
    width: "100%", // take full column width
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover",
  },
  following: {
    textAlign: "center",
    marginTop: 300,
    fontSize: 18,
    color: "#666",
  },
});

export default Home;