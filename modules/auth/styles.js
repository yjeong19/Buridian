var { StyleSheet } = require('react-native');
import {padding, color, fontSize, misc} from "../../styles/Theme"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(59,70,79)'
    },

    wrapper:{
        flex:1, justifyContent:"center", alignItems:"center"
    },

    appTitle:{
        fontSize:fontSize.large,
        fontWeight:"500",
        color:color.white,
    },

    inputContainer:{
        width:misc.window_width - 40
    },

    bottomContainer:{
        flexDirection:"row",
        paddingVertical: padding,
        marginBottom: padding * 3
    },

    buttonContainer:{
        width: (misc.window_width - 45) / 2,
        marginLeft: 15,
        marginRight: 0
    },

    buttonText:{
        color:color.white,
        fontWeight:"500"
    },

    formBtn: {
        marginVertical: padding * 2,
        marginHorizontal: 0
    },

    fbButton:{
        paddingVertical: padding * 2,
        paddingHorizontal: padding * 3,
        borderRadius:4,
        marginHorizontal: 15
    },

    forgotText:{
        textAlign:"center"
    },

    errorText:{
        color: "red",
        marginTop: 20,
        marginHorizontal: 20,
    }


});


export default styles;
