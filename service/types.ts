export interface Question {
	index?: number;
	attributes: { title?: string; tags?: string[]; sourceUrl?: string };
	body?: string;
}

export interface Answer {
	attributes: { title?: string; tags?: string[] };
	body?: string;
}
