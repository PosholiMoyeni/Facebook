import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Fontisto, AntDesign,FontAwesome, FontAwesome5, MaterialCommunityIcons,MaterialIcons, Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.upperbox}>

        <View style={styles.Content}>

          <View style={styles.UpperContent}>

            <Text style={styles.logo}>facebook</Text>

            <TouchableOpacity>
            <View style={styles.Searchbox}>
              <MaterialIcons name="search" size={40} color="white" />
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.menu}>
                <AntDesign name="menufold" size={40} color="white" />
              </View>
            </TouchableOpacity>

          </View>

     </View>  
    </View>
    <View style={styles.LowerContent}>

            <TouchableOpacity>
              <View style={styles.home}>
                <FontAwesome name="home" size={24} color="white" />
              </View>
              </TouchableOpacity>

              <TouchableOpacity>
                <View style={styles.friends}>
                   <AntDesign name="addusergroup" size={24} color="white" />
                </View>
               </TouchableOpacity>

               <TouchableOpacity>
                 <View style={styles.message}>
                    <FontAwesome5 name="facebook-messenger" size={24} color="white" />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity>
                  <View style={styles.notification}>
                    <Ionicons name="notifications-outline" size={24} color="white" />
                  </View>
                </TouchableOpacity>
            </View>
      <ScrollView>
      <View style={styles.post}>
        <View style={styles.Body}>
          <View style={styles.header}>
            <Image
              style={styles.profile}
              source={require('./assets/MyProfile.jpg')}
            />
            <View style={styles.Details}>
            <TouchableOpacity>
              <Text style={styles.author}>Posholi Ed Myeni</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.date}>Yesterday</Text>
                <Fontisto name='world-o' size={15} color='#9E9E9E' />
              </View>
            </View>
          </View>
          <View>
            <Text>
              Beautiful Home Office design a Software Engineer can come up with... read more
            </Text>
            <Image
              style={styles.Image}
              source={require('./assets/HomeOffice.jpg')}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton1}>
              <View style={styles.Like}>
                 <AntDesign name="like2" size={24} color="#455A64" />
              </View> 
          </TouchableOpacity>  
          <TouchableOpacity style={styles.footerButton2}>  
              <View style={styles.Comment}> 
                 <FontAwesome5 name="comment-alt" size={24} color="#455A64" />
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton3}>  
              <View style={styles.Share}>
                 <MaterialCommunityIcons name="share-outline" size={30} color="#455A64" /> 
              </View>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>               
    <StatusBar style="auto" />
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    alignItems: 'center',
  },
  upperbox: {
    alignSelf: "flex-start",
    width: "100%",
    height: "15%",
    borderColor: '#E0E0E0',
    backgroundColor: "#303F9F", 
    alignItems: "center",   
},
UpperContent:{

  bottom:10,
  width: "100%",
  height: 70, 
  flexDirection:"row",
  justifyContent:"space-evenly",
  alignItems: "center",
  right:100,
},
LowerContent:{
  bottom:40,
  width: "90%",
  height: 30, 
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems: "center",
  right: 6,
},
home:{
  height:40,
  width: '60%',
  flexDirection:"row",
  justifyContent: "flex-start",
  backgroundColor:"#1B1C5D",
  alignItems:"center",
  borderRadius:10,
  margin: 10,
},
logo:{
  color: "white",
  fontSize:30,
  fontWeight:"bold",
  fontStyle:"normal",
  margin: 200,
},
Searchbox:{
  height:40,
  width: '60%',
  flexDirection:"row",
  justifyContent: "flex-start",
  backgroundColor:"#1B1C5D",
  alignItems:"center",
  borderRadius:10,
  margin: 15,
},
menu:{
  height:40,
  width: '70%',
  flexDirection:"row",
  justifyContent: "flex-start",
  backgroundColor:"#1B1C5D",
  alignItems:"center",
  borderRadius:10,
  margin: 10,
},
home:{
  height:20,
  width: '70%',
  flexDirection:"row",
  justifyContent: "flex-start",
  backgroundColor:"#1B1C5D",
  alignItems:"center",
  borderRadius:10,
  margin: 10,
},
post: {
  position:"relative",
  backgroundColor: '#fff',
  borderColor: '#E0E0E0',
  borderWidth: 1,
  margin: 2,
  width: '90%',
  alignSelf: "center",
},
Body: {
  padding: 10,
},
profile: {
  width: 60,
  height: 60,
  marginRight: 10,
  borderRadius: 30,
},
header: {
  flexDirection: 'row',
},
author: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 1,
},
date: {
  color: '#9E9E9E',
  marginRight: 5,
  fontSize: 13,
},
Image: {
  width: '100%',
  height: 200,
},
footer: {
  height: 40,
  paddingLeft: 10,
  width: '100%',
  backgroundColor: '#ECEFF1',
  borderTopWidth: 1,
  borderTopColor: '#E0E0E0',
  alignContent: 'space-between',
  flexDirection: 'row', 
},
footerButton1: {
  alignItems: 'center',
  height: 30,
  width:30,
  borderRadius: 20,
  marginTop: 5,

},
Like: {
  bottom:16,
  marginLeft: 50,
  color: 'black',
  fontWeight: 'bold',
  height:"100%",
  width: '165%',
  flexDirection:"row",
  justifyContent: "flex-start",
  backgroundColor:"#6666",
  alignItems:"center",
  borderRadius:15,
  margin: 15,
  
},
Comment: {
  bottom:13,
  marginLeft: 155,
  color: 'black',
  fontWeight: 'bold',
  height:"80%",
  width: '29%',
  flexDirection:"row",
  justifyContent: "flex-start",
  backgroundColor:"#6666",
  alignItems:"center",
  borderRadius:15,
  margin: 15,

},
Share: {
  bottom:14,
  marginLeft: 139,
  color: 'black',
  fontWeight: 'bold',
  height:"85%",
  width: '30%',
  flexDirection:"row",
  justifyContent: "flex-start",
  backgroundColor:"#6666",
  alignItems:"center",
  borderRadius:15,
  margin: 15,
},
},)