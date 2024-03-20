import { Stack } from "expo-router";

const RootLayout = ()=> {
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name ="index"/>
            <Stack.Screen name="subjects/[subject]"/>
            <Stack.Screen name ="settings/settingsScreen"/>
            <Stack.Screen name = "quiz/endscreen/[points]"/>
            <Stack.Screen name ="quiz/startscreen/[chapter]"/>
        </Stack>
    )
}

export default RootLayout; 