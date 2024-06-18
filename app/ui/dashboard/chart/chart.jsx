"use client"
import {ResponsiveContainer,XAxis,YAxis, Line,LineChart, Tooltip, Legend } from 'recharts'
import styles from './chart.module.css'

const  Chart = () =>{
  const data=[
    {
      name:"Sun",
      visit:500,
      click:800
    },
    {
    name:"Mon",
    visit:4500,
    click:3800
  },
  {
    name:"Tue",
    visit:3295,
    click:758
  },
  {
    name:"Wed",
    visit:6500,
    click:5800
  },
  {
    name:"Thu",
    visit:9800,
    click:15000
  },
  {
    name:"Fri",
    visit:8500,
    click:7800
  },
  {
    name:"Sat",
    visit:2500,
    click:3800
  },
 
]
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart 
        width={500} 
        height={300} 
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor:"#151c2c", border:"none"}} />
          <Legend />
          <Line type="monotone" strokeWidth={2} dataKey="visit" stroke="#8884d8" />
          <Line type="monotone" strokeWidth={2} dataKey="click" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
