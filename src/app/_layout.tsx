import { Stack } from "expo-router";

const RootLayout = ()=> {
    return (
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name ="index"/>
            <Stack.Screen name="subjects/[subject]"/>
            <Stack.Screen name ="settings/settingsScreen"/>
            <Stack.Screen name ="quiz/[startScreen]"/>
            <Stack.Screen name ="quiz/[questionScreen]"/>
            <Stack.Screen name ="quiz/[endScreen]"/>
            {/* settings screen etc */}
        </Stack>
    )
}

export default RootLayout; 