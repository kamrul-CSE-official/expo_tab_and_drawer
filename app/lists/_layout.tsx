import { Tabs } from 'expo-router'
import React from 'react'

const TabLayout = () => {
  return (
   <Tabs>
    <Tabs.Screen name='index' options={{title: "Items"}} />
    <Tabs.Screen name='[id]' options={{title: "Items"}} />
   </Tabs>
  )
}

export default TabLayout