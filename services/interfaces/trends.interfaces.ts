import { AxiosResponse } from 'axios'

export type Trend = string

export type GetTrendsData = {
	trends: Trend[]
}

export interface GetTrendsReturn extends AxiosResponse {
	data: GetTrendsData
}
