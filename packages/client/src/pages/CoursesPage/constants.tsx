import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Flex,
  Group,
  Popover,
  Rating,
  Text,
  Tooltip,
} from '@mantine/core';
import { CourseInfoFragment } from '@shared/graphql';
import { IconExternalLink, IconLanguage } from '@tabler/icons-react';
import { MRT_ColumnDef, MRT_ColumnFiltersState } from 'mantine-react-table';

import { CoursePlatformLogo, DifficultyBadge } from 'src/components';

type ColumnsOptions = {
  platforms: string[];
  languages: string[];
  topics: string[];
  difficulties: string[];
  setFiltersState: React.Dispatch<React.SetStateAction<MRT_ColumnFiltersState>>;
};

const DEFAULT_RANGE_TEXT_INPUT_PROPS: (
  options: ColumnsOptions,
) => MRT_ColumnDef<CourseInfoFragment>['mantineFilterTextInputProps'] =
  options =>
  ({ column: { id }, rangeFilterIndex }) => ({
    type: 'number',
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      options.setFiltersState(prevState => {
        const fieldValue = event.target.value;
        const prevFilterIdx = prevState.findIndex(filter => filter.id === id);
        const value = {
          [rangeFilterIndex === 0 ? 'min' : 'max']: fieldValue ? Number(fieldValue) : undefined,
        };

        if (prevFilterIdx !== -1) {
          return [
            ...prevState.slice(0, prevFilterIdx),
            {
              id,
              value: {
                ...((prevState[prevFilterIdx] as MRT_ColumnFiltersState[0]).value as any),
                ...value,
              },
            },
            ...prevState.slice(prevFilterIdx + 1),
          ];
        }

        return prevState.concat({ id, value });
      });
    },
  });

export const COURSES_TABLE_COLUMNS: (
  options: ColumnsOptions,
) => MRT_ColumnDef<CourseInfoFragment>[] = options => [
  {
    id: 'id',
    header: 'Id',
    accessorKey: 'id',
  },
  {
    id: 'title',
    header: 'Title',
    accessorKey: 'title',
  },
  {
    id: 'platform.name',
    header: 'Platform',
    accessorFn: ({ platform }) =>
      platform ? (
        <Popover position="right" withArrow>
          <Popover.Target>
            <Box display="inline-block" sx={{ cursor: 'pointer' }}>
              <CoursePlatformLogo logoUrl={platform.logoUrl} />
            </Box>
          </Popover.Target>
          <Popover.Dropdown>
            <Group>
              <CoursePlatformLogo logoUrl={platform.logoUrl} />
              <Text>{platform?.name}</Text>
              <ActionIcon component="a" href={platform.url} target="_blank">
                <IconExternalLink />
              </ActionIcon>
            </Group>
          </Popover.Dropdown>
        </Popover>
      ) : (
        <Text c="dimmed">None</Text>
      ),
    filterVariant: 'multi-select',
    mantineFilterMultiSelectProps: {
      data: options.platforms as any, // TODO
    },
    size: 30,
  },
  {
    id: 'url',
    header: 'Url',
    accessorFn: ({ url }) => (
      <Tooltip label={url} withArrow openDelay={300}>
        <Button
          maw={300}
          component="a"
          href={url}
          target="_blank"
          compact
          variant="subtle"
          leftIcon={<IconExternalLink size="0.9rem" />}
        >
          {url}
        </Button>
      </Tooltip>
    ),
  },
  {
    id: 'description',
    header: 'Description',
    accessorFn: ({ description }) => (
      <Tooltip label={description} width={300} multiline withArrow openDelay={500} withinPortal>
        <Text lineClamp={3} sx={{ cursor: 'help', width: 400 }}>
          {description}
        </Text>
      </Tooltip>
    ),
  },
  {
    header: 'Topics',
    accessorFn: ({ tags }) => (
      <Flex gap="sm" sx={{ textTransform: 'capitalize' }} maw={500} wrap="wrap">
        {tags.map(tag => (
          <Badge key={tag.id} variant="dot" size="md">
            {tag.name}
          </Badge>
        ))}
      </Flex>
    ),
    filterVariant: 'multi-select',
    mantineFilterMultiSelectProps: {
      data: options.topics as any,
    },
  },
  {
    id: 'price.price',
    header: 'Price',
    accessorFn: ({ price }) => (price ? `${price.price} ${price.currencyCodeISO}` : 'Free'),
    filterVariant: 'range',
    mantineFilterTextInputProps: DEFAULT_RANGE_TEXT_INPUT_PROPS(options),
  },
  {
    id: 'languages_SOME.countryCodeISO',
    header: 'Languages',
    accessorFn: ({ languages }) =>
      languages.map(language => (
        <Badge
          key={language.countryCodeISO}
          variant="outline"
          pl={4}
          pr={8}
          leftSection={<IconLanguage display="flex" size="1rem" />}
        >
          {language.countryCodeISO}
        </Badge>
      )),
    filterVariant: 'multi-select',
    mantineFilterMultiSelectProps: {
      data: options.languages as any,
    },
  },
  {
    id: 'reviewsAggregate.node.rating_AVERAGE',
    header: 'Internal rating',
    accessorFn: ({ reviewsAggregate }) => (
      <Group>
        <Rating value={reviewsAggregate?.node?.rating.average ?? 0} fractions={2} readOnly />
        <Text>({reviewsAggregate?.count ?? 0})</Text>
      </Group>
    ),
    filterVariant: 'range',
    mantineFilterTextInputProps: DEFAULT_RANGE_TEXT_INPUT_PROPS(options),
  },
  {
    id: 'externalRating',
    header: 'External rating',
    accessorFn: ({ externalRating, externalRatingsCount }) => (
      <Group>
        <Rating value={externalRating ?? 0} fractions={2} readOnly />
        <Text>({externalRatingsCount ?? 0})</Text>
      </Group>
    ),
    filterVariant: 'range',
    mantineFilterTextInputProps: DEFAULT_RANGE_TEXT_INPUT_PROPS(options),
  },
  {
    id: 'difficulty',
    header: 'Difficulty',
    accessorFn: ({ difficulty }) => <DifficultyBadge difficulty={difficulty} />,
    filterVariant: 'multi-select',
    mantineFilterMultiSelectProps: {
      data: options.difficulties as any,
    },
  },
];
