import { Stack } from "expo-router";

const RootLayout = ()=> {
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name ="index"/>
            <Stack.Screen name="subjects/[subject]"/>
            <Stack.Screen name ="settings/settingsScreen"/>
            {/* settings screen etc */}
        </Stack>
    )
}

export default RootLayout; 