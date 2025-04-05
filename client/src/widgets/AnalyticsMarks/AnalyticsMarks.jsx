import { Stack } from '@mantine/core';
import { DonutChart, RadarChart } from '@mantine/charts';
import s from './AnalyticsMarks.module.scss';

const data = [
    { name: 'USA', value: 400, color: 'indigo.6' },
    { name: 'India', value: 300, color: 'yellow.6' },
    { name: 'Japan', value: 100, color: 'teal.6' },
    { name: 'Other', value: 200, color: 'gray.6' },
];

const data2 = [
    {
        product: 'Apples',
        sales: 120,
    },
    {
        product: 'Oranges',
        sales: 98,
    },
    {
        product: 'Tomatoes',
        sales: 86,
    },
    {
        product: 'Grapes',
        sales: 99,
    },
    {
        product: 'Bananas',
        sales: 85,
    },
    {
        product: 'Lemons',
        sales: 65,
    },
]

export default function AnalyticsMarks() {
    return (
        <>
            <Stack className={s.analytics_marks}>
                <div className={s.pie_chart_container}>
                    <h3 className={s.title}>Маркеры</h3>
                    <DonutChart className={s.pie_chart} data={data} withLabelsLine labelsType='percent' withLabels size={180} labelColor='white' mx='auto' />
                </div>
                <div className={s.pie_chart_container}>
                    <h3 className={s.title}>Категории</h3>
                    <RadarChart data={data2} h={300} dataKey='product' withPolarRadiusAxis series={[{ name: 'sales', color: 'blue.4', opacity: 0.2 }]} textColor='white' gridColor='white' />
                </div>
            </Stack >
        </>

    )
}
