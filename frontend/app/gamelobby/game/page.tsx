'use client';
import { GameCanvas } from './GameCanvas';
import { RootState } from '@/app/gamelobby/GlobalRedux/store';
import { useSelector } from 'react-redux';
import { GameOutcomeModal, CountdownModal } from '@/app/gamelobby/components';
import Image from 'next/image';
import computer from '@/public/static/images/computer.png';

interface ScoreProps {
	score: number;
	username: string;
}

const Score: React.FC<ScoreProps> = ({ score, username }) => {
	return (
		<div className="flex flex-col">
			<div className="text-base lg:text-2xl font-bold mr-4"> {username} </div>
			<div className="text-xl">{score}</div>
		</div>
	);
};

interface StatsProps {
	scorePos: 'left' | 'right';
	gameData: {
		username: string;
		avatar: string;
	};
}

const Stats: React.FC<StatsProps> = ({ scorePos, gameData }) => {
	const score = useSelector((state: RootState) => state.game.score);

	return (
		<div className="flex items-center gap-x-8">
			{scorePos === 'right' ? (
				<Score score={score.player1} username={gameData.username} />
			) : null}
			<div className="">
				{gameData.username === 'Computer' ? (
					<Image
						src={computer}
						width={80}
						height={80}
						alt="Computer"
						style={{ borderRadius: '50%', width: '100%' }}
					/>
				) : (
					<Image
						src={gameData.avatar}
						alt="Avatar"
						width={80}
						height={80}
						style={{ borderRadius: '50%', width: '100%' }}
					/>
				)}
			</div>
			{scorePos === 'left' ? (
				<Score score={score.player2} username={gameData.username} />
			) : null}
		</div>
	);
};

const GameHeader = () => {
	const userData = useSelector((state: RootState) => state.game.userData);
	//! this is not gonna show the right avatar gameData will be the same for both

	return (
		<div className="h-1/4 flex items-center justify-evenly">
			<Stats scorePos={'left'} gameData={userData[0]} />
			<Stats scorePos={'right'} gameData={userData[1]} />
		</div>
	);
};

const GameCanvasWrapper = () => {
	return (
		<div className="h-3/4 flex items-center justify-center">
			<GameCanvas />
		</div>
	);
};

export default function Game() {
	const playerOutcome = useSelector(
		(state: RootState) => state.connection.playerOutcome,
	);

	return (
		<>
			<CountdownModal />
			<GameOutcomeModal outcome={playerOutcome} />
			<div className="flex flex-col items-center h-full">
				<div className="flex flex-col w-3/5 h-full py-8">
					<GameHeader />
					<GameCanvasWrapper />
				</div>
			</div>
		</>
	);
}
