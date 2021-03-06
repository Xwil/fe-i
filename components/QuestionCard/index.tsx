import { Box, Divider, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { QuestionType } from 'service/types';
import { MDXRenderAsync } from '../metrics/MDXRender/async';
import { TagsAsync } from '../TagsRender/async';

interface Props {
	question: QuestionType;
	href?: string;
}

const ContentContainer = styled(Box)`
	h2 {
		text-indent: 0;
		font-size: 1em;
	}
`;

export default function QuestionCard({
	question,
	href,
	...props
}: Props): ReactElement {
	const finalUrl = href || question.attributes.source || undefined;

	return (
		<>
			<Box
				rounded="lg"
				width={['20em', '25em', '32em', '50em']}
				p={3}
				_hover={{ borderColor: '#EDF2F7' }}
				{...props}
			>
				<Flex direction={['column', 'column', 'row', 'row']}>
					<ContentContainer mr={[null, null, 4, 4]}>
						{finalUrl ? (
							<Link href={finalUrl || '#'}>
								<a target="_blank">
									<Box cursor="pointer">
										<MDXRenderAsync mdx={question?.body} />
									</Box>
								</a>
							</Link>
						) : (
							<Box>
								<MDXRenderAsync mdx={question?.body} />
							</Box>
						)}
					</ContentContainer>

					<Box mt="0.3em" ml={[null, null, 'auto', 'auto']}>
						{question?.attributes?.tags && (
							<TagsAsync tags={question?.attributes?.tags} />
						)}
					</Box>
				</Flex>
			</Box>
			<Divider />
		</>
	);
}
