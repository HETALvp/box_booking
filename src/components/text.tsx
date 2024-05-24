import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AppColors } from '../theme/colors'

interface Props {
    text: string,
    color?: string
}

const Title1 = ({ text }: Props) => {
    return <Text style={styles.title1Style} >{text}</Text>
}
const Title1Bold = ({ text }: Props) => {
    return <Text style={styles.title1BoldStyle} >{text}</Text>
}
const Title2 = ({ text }: Props) => {
    return <Text style={styles.title2Style} >{text}</Text>
}
const Title3 = ({ text }: Props) => {
    return <Text style={styles.title3Style} >{text}</Text>
}
const Headline = ({ text }: Props) => {
    return <Text style={styles.headlineStyle} >{text}</Text>
}
const Body = ({ text }: Props) => {
    return <Text style={styles.bodyStyle} >{text}</Text>
}
const Callout = ({ text }: Props) => {
    return <Text style={styles.calloutStyle} >{text}</Text>
}
const Callout800 = ({ text }: Props) => {
    return <Text style={styles.callout800Style} >{text}</Text>
}
const SubHeading = ({ text }: Props) => {
    return <Text style={styles.subHeadingStyle} >{text}</Text>
}
const FootNote = ({ text }: Props) => {
    return <Text style={styles.footnoteStyle} >{text}</Text>
}
const Caption1 = ({ text }: Props) => {
    return <Text style={styles.caption1Style} >{text}</Text>
}
const Caption2 = ({ text }: Props) => {
    return <Text style={styles.caption2Style} >{text}</Text>
}

const Title1Color = ({ text, color }: Props) => {
    return <Text style={[styles.title1Style, color ? { color: color } : styles.color]} >{text}</Text>
}
const Title1BoldColor = ({ text, color }: Props) => {
    return <Text style={[styles.title1BoldStyle, color ? { color: color } : styles.color]} >{text}</Text>
}
const Title2Color = ({ text, color }: Props) => {
    return <Text style={[styles.title2Style, color ? { color: color } : styles.color]} >{text}</Text>
}
const Title3Color = ({ text, color }: Props) => {
    return <Text style={[styles.title3Style, color ? { color: color } : styles.color]} >{text}</Text>
}
const Title3ColorBold = ({ text, color }: Props) => {
    return <Text style={[styles.title3StyleBold, color ? { color: color } : styles.color]} >{text}</Text>
}
const HeadlineColor = ({ text, color }: Props) => {
    return <Text style={[styles.headlineStyle, color ? { color: color } : styles.color]} >{text}</Text>
}
const BodyColor = ({ text, color }: Props) => {
    return <Text style={[styles.bodyStyle, color ? { color: color } : styles.color]} >{text}</Text>
}
const CalloutColor = ({ text, color }: Props) => {
    return <Text style={[styles.calloutStyle, color ? { color: color } : styles.color]} >{text}</Text>
}
const CalloutColor800 = ({ text, color }: Props) => {
    return <Text style={[styles.callout800Style, color ? { color: color } : styles.color]} >{text}</Text>
}
const SubHeadingColor = ({ text, color }: Props) => {
    return <Text style={[styles.subHeadingStyle, color ? { color: color } : styles.color]} >{text}</Text>
}
const FootNoteColor = ({ text, color }: Props) => {
    return <Text style={[styles.footnoteStyle, color ? { color: color } : styles.color]} >{text}</Text>
}
const Caption1Color = ({ text, color }: Props) => {
    return <Text style={[styles.caption1Style, color ? { color: color } : styles.color]} >{text}</Text>
}
const Caption1BoldColor = ({ text, color }: Props) => {
    return <Text style={[styles.caption1BoldStyle, color ? { color: color } : styles.color]} >{text}</Text>
}
const Caption2Color = ({ text, color }: Props) => {
    return <Text style={[styles.caption2Style, color ? { color: color } : styles.color]} >{text}</Text>
}

export { Title1, Title2, Title3, Title1Color, Title2Color, Title3Color, Headline, HeadlineColor, Body, BodyColor, Callout, CalloutColor, SubHeading, SubHeadingColor, Caption1, Caption1Color, Caption2, Caption2Color, Callout800, CalloutColor800, Title3ColorBold, Title1Bold, Title1BoldColor, Caption1BoldColor }

const styles = StyleSheet.create({
    color: {
        color: AppColors.primaryColor
    },
    title1Style: {
        fontSize: 28,
        fontWeight: 'regular'
    },
    title1BoldStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    title2Style: {
        fontSize: 22,
        fontWeight: 'regular'
    },
    title3Style: {
        fontSize: 20,
        fontWeight: 'regular'
    },
    title3StyleBold: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    headlineStyle: {
        fontSize: 17,
        fontWeight: 'semibold'
    },
    bodyStyle: {
        fontSize: 14,
        fontWeight: 'regular'
    },
    calloutStyle: {
        fontSize: 16,
        fontWeight: 'regular'
    },
    callout800Style: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    subHeadingStyle: {
        fontSize: 15,
        fontWeight: 'regular'
    },
    footnoteStyle: {
        fontSize: 13,
        fontWeight: 'regular'
    },
    caption1Style: {
        fontSize: 12,
        fontWeight: 'regular'
    },
    caption1BoldStyle: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    caption2Style: {
        fontSize: 11,
        fontWeight: 'regular'
    },
})