import * as React from 'react-native';
import { View, SafeAreaView, StyleProp, StyleSheet, ViewStyle } from "react-native";
import Loader from "./Loader";
import { HeaderHeightContext } from "@react-navigation/elements";


interface HeaderProps {
    children: any,
    style?: StyleProp<ViewStyle>,
    loading: boolean,
}

const ViewWithLoading = ({ children, style, loading }: HeaderProps) => (
    <HeaderHeightContext.Consumer>
        {headerHeight => (
            <View style={styles.container}>
                <SafeAreaView style={[styles.container, {
                    flex: 5,
                    zIndex: 1
                }]}>
                    {children}
                    {loading && <Loader />}
                </SafeAreaView>
            </View>
        )}
    </HeaderHeightContext.Consumer>
)
export default ViewWithLoading;

const styles = StyleSheet.create({
    container: {
        flex: 1,
     //   backgroundColor: 'yellow'
    }
})