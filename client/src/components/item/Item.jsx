import { Link } from "react-router-dom";

import { IconHeart } from "@tabler/icons-react";
import { Card, Image, Text, Group, Button, ActionIcon } from "@mantine/core";
import classes from "./Item.module.css";

const Item = ({ strDrink, strDrinkThumb, idDrink }) => {
    return (
        <div className={classes.container}>
            <Card withBorder radius="md" p="md" className={classes.card}>
                <Card.Section>
                    <Image src={strDrinkThumb} alt={strDrink} height={180} />
                </Card.Section>

                <Card.Section className={classes.section} mt="md">
                    <Group justify="apart">
                        <Text fz="lg" fw={500}>
                            {strDrink}
                        </Text>
                    </Group>
                </Card.Section>

                <Card.Section className={classes.section}>
                    <Text mt="md" className={classes.label} c="dimmed">
                        Perfect for you, if you enjoy
                    </Text>
                    <Group gap={7} mt={5}></Group>
                </Card.Section>

                <Group mt="xs">
                    <Button
                        component={Link}
                        to={`/details/${idDrink}`}
                        radius="md"
                        style={{ flex: 1 }}
                    >
                        Show details
                    </Button>
                    <ActionIcon variant="default" radius="md" size={36}>
                        <IconHeart className={classes.like} stroke={1.5} />
                    </ActionIcon>
                </Group>
            </Card>
        </div>
    );
};

export default Item;
