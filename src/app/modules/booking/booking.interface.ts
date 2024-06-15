export interface TBooking {
	userId: string;
	bikeId: string;
	startTime: Date;
	returnTime: Date;
	totalCost: number;
	isReturned: boolean;
}
