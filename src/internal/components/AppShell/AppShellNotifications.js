import React from 'react';
import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  DropButton,
  Heading,
  Stack,
  Text,
} from 'grommet';
import useAppShell from './useAppShell';

function Icon({ icon, color = 'text', size = 'medium', ...props }) {
  const Component = icon;
  return (
    <Box {...props}>
      <Component color={color} size={size} />
    </Box>
  );
}

function AppShellNotification({ category, notifications = [] }) {
  return (
    <DropButton
      icon={
        <AppShellNotificationIndicator
          icon={category?.icon}
          count={notifications?.length}
        />
      }
      dropAlign={{ top: 'bottom', right: 'right' }}
      dropContent={
        <AppShellNotificationMenu
          category={category}
          notifications={notifications}
        />
      }
    />
  );
}

function AppShellNotificationIndicator({ icon, count }) {
  return (
    <Box>
      <Stack anchor="top-right">
        <Icon icon={icon} />
        <Box
          align="center"
          justify="center"
          background="brand-2"
          pad={{ horizontal: 'xsmall' }}
          width={{ min: '18px' }}
          height={{ min: '18px' }}
          margin={{ top: '-7px', right: '-7px' }}
          round
        >
          <Text size="xsmall">{count}</Text>
        </Box>
      </Stack>
    </Box>
  );
}

function AppShellNotificationMenu({ category, notifications }) {
  return (
    <Card width="medium">
      <CardHeader pad="small" background="white">
        <Heading level={5} margin="none">
          {category?.name}
        </Heading>
      </CardHeader>
      <CardBody pad="small" background="light-1">
        {notifications.map((notification) => {
          return (
            <AppShellNotificationMenuItem
              key={notification.id}
              {...notification}
            />
          );
        })}
      </CardBody>
    </Card>
  );
}

function AppShellNotificationMenuItem({
  description,
  id,
  image,
  metadata,
  title,
}) {
  return (
    <Box direction="row" align="start" gap="small">
      {image ? <Avatar src={image} /> : null}
      <Box gap="xsmall" flex>
        <Box direction="row" align="center" justify="between" gap="xsmall">
          {title ? (
            <Heading level={6} margin="none">
              {title}
            </Heading>
          ) : null}
          {metadata ? (
            <Text size="xsmall" color="dark-6">
              {metadata}
            </Text>
          ) : null}
        </Box>
        {description ? (
          <Text size="small" color="dark-3">
            {description}
          </Text>
        ) : null}
      </Box>
    </Box>
  );
}
export default function AppShellNotifications() {
  const { categories, notificationsByCategoryId } = useAppShell();
  return (
    <Box
      className="AppShellNotifications"
      direction="row"
      justify="end"
      pad="medium"
      gap="medium"
    >
      {categories.map((category) => {
        return (
          <AppShellNotification
            key={category?.id}
            category={category}
            notifications={notificationsByCategoryId[category?.id]}
          />
        );
      })}
    </Box>
  );
}
