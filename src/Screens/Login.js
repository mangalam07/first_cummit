// ----- import React
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

// ----- Main Component
const Login = ({navigation}) => {
  // ----- Main View
  return (
    <View>
      {/* Header Round Image  */}
      <Image
        style={{
          resizeMode: 'stretch',
          width: '100%',
        }}
        source={require('../Assets/Login_size_01.png')}
      />

      <View style={{alignItems:'center',marginHorizontal:20,marginTop:10}}> 
        {/* Login Title */}
        <Text style={styles.LoginTitle}>Login</Text>

        {/* Sub Title */}
        <Text style={styles.SubTitle}>Welcome back</Text>

        {/* TextInput Field for email and password */}
        <View>
          <TextInput style={styles.inputField} placeholder="Email/User Name" />
          <TextInput style={styles.inputField} placeholder="Password" />
        </View>

        {/* Password Forgot Button */}
        <TouchableOpacity style={styles.forgotPassword}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.LoginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Facebook and Google Button */}
        <View style={styles.SocialMedia}>
          <TouchableOpacity>
            <View
              style={[
                styles.Social_innerComponent,
                {backgroundColor: 'purple'},
              ]}>
              {/* <Image source={require("../Assets/")}/> */}
              <Text style={styles.Social_Text}>F</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[styles.Social_innerComponent, {backgroundColor: 'red'}]}>
              {/* <Image source={require("../Assets/")}/> */}
              <Text style={styles.Social_Text}>G</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Register new user text */}
        <View style={styles.AddaccountDes}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.Registertext}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

// ----- Stylesheets
const styles = StyleSheet.create({
  LoginTitle: {
    fontSize: 30,
    marginTop: 12,
    fontWeight: '500',
    color: '#43b558',
  },
  SubTitle: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: '500',
  },
  inputField: {
    borderWidth: 0.5,
    width: 285,
    height: 50,
    borderRadius: 18,
    borderColor: 'gray',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginRight: 45,
  },
  LoginButton: {
    backgroundColor: '#43b558',
    width: '45%',
    borderRadius: 17,
    marginVertical: 22,
  },
  LoginButtonText: {
    alignSelf: 'center',
    fontSize: 17,
    fontWeight: '700',
    color: '#fff',
    padding: 10,
  },
  SocialMedia: {
    flexDirection: 'row',
    width: 85,
    justifyContent: 'space-between',
  },
  Social_innerComponent: {
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    width: 35,
    backgroundColor: 'red',
  },
  Social_Text: {
    fontSize: 19,
    color: '#fff',
  },
  AddaccountDes: {
    flexDirection: 'row',
    width: '56%',
    justifyContent: 'space-between',
    marginVertical: 13,
  },
  Registertext: {
    fontWeight: '400',
    color: 'green',
  },
});
