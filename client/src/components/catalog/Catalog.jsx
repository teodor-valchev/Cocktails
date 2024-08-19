import { useEffect, useState } from "react";

import * as cocktailsService from "../../coctails_API/cocktailsService.js";

import { IconHeart } from "@tabler/icons-react";
import {
    Card,
    Image,
    Text,
    Group,
    Badge,
    Button,
    ActionIcon,
} from "@mantine/core";
import classes from "./Catalog.module.css";

const Catalog = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        cocktailsService.getAll()
            .then((res) => setCocktails(res.drinks));
    }, []);

    console.log(cocktails);

    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
            <Card.Section>
                {/* <Image src={''} alt={title} height={180} /> */}
            </Card.Section>

            <Card.Section className={classes.section} mt="md">
                <Group justify="apart">
                    <Text fz="lg" fw={500}>
                        {/* {title} */}
                    </Text>
                    <Badge size="sm" variant="light">
                        {/* {country} */}
                    </Badge>
                </Group>
                <Text fz="sm" mt="xs">
                    {/* {description} */}
                </Text>
            </Card.Section>

            <Card.Section className={classes.section}>
                <Text mt="md" className={classes.label} c="dimmed">
                    Perfect for you, if you enjoy
                </Text>
                <Group gap={7} mt={5}></Group>
            </Card.Section>

            <Group mt="xs">
                <Button radius="md" style={{ flex: 1 }}>
                    Show details
                </Button>
                <ActionIcon variant="default" radius="md" size={36}>
                    <IconHeart className={classes.like} stroke={1.5} />
                </ActionIcon>
            </Group>
        </Card>
    );
};

export default Catalog;
