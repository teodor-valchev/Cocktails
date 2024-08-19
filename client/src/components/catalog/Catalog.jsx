import {
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
    useMantineTheme,
} from "@mantine/core";
import classes from "./Catalog.module.css";


const Catalog = () => {
    const theme = useMantineTheme();

        <Card
            key={'1'}
            shadow="md"
            radius="md"
            className={classes.card}
            padding="xl"
        >
            <i
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.blue[6]}
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                
            </Text>
        </Card>
    return (
        <Container size="lg" py="xl">
            <Group justify="center">
                <Badge variant="filled" size="lg">
                    Best company ever
                </Badge>
            </Group>

            <Title order={2} className={classes.title} ta="center" mt="sm">
                Integrate effortlessly with any technology stack
            </Title>

            <Text
                c="dimmed"
                className={classes.description}
                ta="center"
                mt="md"
            >
                Every once in a while, you’ll see a Golbat that’s missing some
                fangs. This happens when hunger drives it to try biting a
                Steel-type Pokémon.
            </Text>

            <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                
            </SimpleGrid>
        </Container>
    );
};

export default Catalog;
