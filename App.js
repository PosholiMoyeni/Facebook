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
              <MaterialIcons name="search" size={30} color="white" />
              <Text style={styles.Holder}> Search . . .</Text>
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
            <Text>
              Beautiful Home Office design a Software Designer can come up with... read more
            </Text>
            <Image
              style={styles.Image}
             // resizeMode="repeat"
              source={require('./assets/HomeOffice.jpg')}
            />
          </View>
        <View style={styles.footer}>

          <TouchableOpacity>
              <View style={styles.Like}>
                 <AntDesign name="like2" size={24} color="#455A64" />
              </View> 
          </TouchableOpacity> 

          <TouchableOpacity>  
              <View style={styles.Comment}> 
                 <FontAwesome5 name="comment-alt" size={24} color="#455A64" />
              </View>
          </TouchableOpacity>

          <TouchableOpacity>  
              <View style={styles.Share}>
                 <MaterialCommunityIcons name="share-outline" size={30} color="#455A64" /> 
              </View>
          </TouchableOpacity>

        </View>
      </View>
    <StatusBar style="auto" />
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position:"absolute",
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
    justifyContent:"space-around",   
},
Content:{
   alignItems:"center",
   justifyContent:"space-around",
},
UpperContent:{
  height: 100,
  bottom: 24,
  paddingLeft: 10,
  width: '100%',
  borderTopWidth: 1,
  borderTopColor: '#E0E0E0',
  alignContent: 'center',
  flexDirection: 'row',
  alignItems:"center" ,
  justifyContent:"space-between",
  right: 70,
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
  margin: 50,
  justifyContent:"flex-start",
},
Searchbox:{
  top:4,
  height:30,
  width: '130%',
  flexDirection:"row",
  justifyContent: "flex-start",
  backgroundColor:"#1B1C5D",
  alignItems:"center",
  borderRadius:10,
  margin: 15,
  right:30,
},
Holder:{
  color:'#6666',
  fontSize:20,
  fontStyle:"italic"
},
menu:{
  top:2,
  height:40,
  width: '70%',
  flexDirection:"row",
  justifyContent: "flex-start",
  backgroundColor:"#1B1C5D",
  alignItems:"center",
  borderRadius:10,
  margin: 10,
  left:78,
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
  marginBottom:3,
  backgroundColor: '#fff',
  borderColor: '#E0E0E0',
  borderWidth: 1,
  margin: 2,
  width: '90%',
  alignSelf: "center",
},
Body: {
  padding: 10,
  position:"relative",
  justifyContent:"space-between",
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
  height:300,
},
footer: {
  height: 40,
  paddingLeft: 10,
  width: '100%',
  backgroundColor: '#ECEFF1',
  borderTopWidth: 1,
  borderTopColor: '#E0E0E0',
  alignContent: 'center',
  flexDirection: 'row',
  alignItems:"center" ,
  justifyContent:"space-around",
},
footerButton: {
  alignItems: 'center',
  height: 30,
  width:30,
  borderRadius: 20,
  marginTop: 5,

},
Like: {  
  fontWeight: 'bold',
  height:"110%",
  width: '90%',
  flexDirection:"row",
  justifyContent: "space-around",
  backgroundColor:"#6666",
  alignItems:"center",
  borderRadius:15,
  margin: 15,
  
},
Comment: {
  fontWeight: 'bold',
  height:"100",
  width: '90%',
  flexDirection:"row",
  justifyContent: "space-around",
  backgroundColor:"#6666",
  alignItems:"center",
  borderRadius:15,
  margin:15,
},
Share: {
  fontWeight: 'bold',
  height:"100%",
  width: '90%',
  flexDirection:"row",
  justifyContent: "space-around",
  backgroundColor:"#6666",
  alignItems:"center",
  borderRadius:15,
  margin: 15,
},
},)