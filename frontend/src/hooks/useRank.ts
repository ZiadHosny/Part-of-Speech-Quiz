import { useAsyncFn } from 'react-use';
import { useConfig } from './useConfig';
import { useNavigate } from 'react-router-dom';

export const useRank = () => {
    const { backendBaseURL } = useConfig()
    const navigate = useNavigate()

    const result = useAsyncFn(async (score: number) => {
        console.log(score, 'ssssssssssssss')
        const response = await fetch(`${backendBaseURL}/rank`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ score }),
            }
        );
        const result = await response.json();

        const rank = result.rank

        if (rank) {
            navigate('/rank', { state: { rank } })
        }

        return result;

    }, [backendBaseURL]);

    return result
};
