import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
export default function Home() {
  return (
    <ScrollView style={{backgroundColor: "#141414", height: '100%'}}>
       <View style={styles.Main}>
        <View style={styles.Box1}>
            <Text style={styles.Text}>PREÇO DO TIME</Text>
            <Text style={styles.Text2}>$0.00</Text>
        </View>
        <View style={styles.Box1}>
            <Text style={styles.Text}>MERCADO FECHA EM</Text>
            <Text style={styles.Text2}>13/09 | 21:19</Text>
        </View>
        <View style={styles.Box1}>
            <Text style={styles.Text}>VOCÊ TEM</Text>
            <Text style={styles.Text2}>$100.00</Text>
        </View>
    </View>
    <View style={styles.Box2}>
        <View style={{flexDirection: 'row'}}>
            <View style={{backgroundColor:"white", borderRadius: 50, width: 80, height: 80, margin: 30}}><Text></Text></View>
            <View style={{flexDirection:'column'}}>
                <Text style={{color:"white", fontSize: 25, paddingTop: 50}}>Meu Time</Text> 
                <Text style={{fontSize: 10, paddingTop:2, color:"#2EF297"}}>João da Silva</Text>
            </View>
        </View>
        <View style={styles.Main}>
        <View style={styles.Box3}>
            <Text style={{color:'#545454', fontSize: 13}}>PATRIMÔNIO</Text>
            <Text style={{color: "#FFFFFF"}}>$100.00</Text>
        </View>
        <View style={styles.Box3}>
            <Text style={{color:'#545454', fontSize: 13}}>ÚLTIMA PONTUAÇÃO</Text>
            <Text style={{color: "#FFFFFF"}}>0.00</Text>
        </View>
        <View style={styles.Box3}>
            <Text style={{color:'#545454', fontSize: 13}}>TOTAL</Text>
            <Text style={{color: "#FFFFFF"}}>0.00</Text>
        </View>
        </View>
        <View style={{alignItems: 'center', marginTop:30}}>
            <TouchableOpacity style={{backgroundColor:"#2EF297", height: 40, width: 140, borderRadius: 10, alignItems:'center', justifyContent:'center'}}><Text style={{fontWeight:700}}>Escale seu time</Text></TouchableOpacity>
        </View>
    </View> 

    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
    Main: {
        flexDirection:'row',
    },
    Box1: {
        backgroundColor: '#0D0D0D',
        width: '33.333%',
        height: 60,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10
    },
    Text:{
        color: '#545454'
    },
    Text2:{
        color: '#FFFFFf'
    },
    Box2:{
        width: 326,
        height: 339,
        borderRadius: 7,
        backgroundColor: '#0D0D0D',
        marginTop: 40,
        marginLeft: 17,
    },
    Box3: {
        width: '33.333%',
        height: 60,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 10,
    },
});