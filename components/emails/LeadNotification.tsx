import * as React from 'react';
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Hr,
    Row,
    Column,
} from '@react-email/components';

interface LeadNotificationProps {
    name: string;
    email: string;
    phone: string;
    service: string;
    budget: string;
    message: string;
}

export const LeadNotification = ({
    name,
    email,
    phone,
    service,
    budget,
    message,
}: LeadNotificationProps) => (
    <Html>
        <Head />
        <Preview>New Lead from Nexus Logic: {name}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section>
                    <Heading style={h1}>New Project Lead</Heading>
                    <Text style={text}>
                        You have received a new inquiry from the Nexus Logic contact form.
                    </Text>
                    <Hr style={hr} />
                    <Section style={section}>
                        <Row>
                            <Column style={label}>Name:</Column>
                            <Column style={value}>{name}</Column>
                        </Row>
                        <Row>
                            <Column style={label}>Email:</Column>
                            <Column style={value}>
                                <a href={`mailto:${email}`} style={link}>
                                    {email}
                                </a>
                            </Column>
                        </Row>
                        <Row>
                            <Column style={label}>Phone:</Column>
                            <Column style={value}>
                                <a href={`tel:${phone}`} style={link}>
                                    {phone}
                                </a>
                            </Column>
                        </Row>
                        <Row>
                            <Column style={label}>Service:</Column>
                            <Column style={value}>{service}</Column>
                        </Row>
                        <Row>
                            <Column style={label}>Budget:</Column>
                            <Column style={value}>{budget}</Column>
                        </Row>
                    </Section>
                    <Hr style={hr} />
                    <Section>
                        <Heading as="h2" style={h2}>Message:</Heading>
                        <Text style={messageText}>{message}</Text>
                    </Section>
                    <Hr style={hr} />
                    <Text style={footer}>
                        This email was sent automatically from the Nexus Logic website.
                    </Text>
                </Section>
            </Container>
        </Body>
    </Html>
);

export default LeadNotification;

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
};

const section = {
    padding: '0 48px',
};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center' as const,
    margin: '30px 0',
};

const h2 = {
    color: '#333',
    fontSize: '20px',
    fontWeight: 'bold',
    marginTop: '20px',
    marginBottom: '10px',
};

const text = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
    textAlign: 'center' as const,
};

const label = {
    color: '#666',
    fontSize: '16px',
    fontWeight: 'bold',
    width: '120px',
};

const value = {
    color: '#333',
    fontSize: '16px',
};

const link = {
    color: '#2563eb',
    textDecoration: 'underline',
};

const messageText = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '4px',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
    textAlign: 'center' as const,
};
