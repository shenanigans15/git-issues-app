import { useQuery } from '@tanstack/react-query'
import { getLabels } from '../actions/get-labels.action'
import { GithubLabel } from '../interfaces/label.interface'

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['labels'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60,

    // placeholderData: [
    //   {
    //     id: 6955781886,
    //     node_id: 'LA_kwDOAJy2Ks8AAAABnpjO_g',
    //     url: 'https://api.github.com/repos/react/react/labels/Compiler:%20todo',
    //     name: 'Compiler: todo',
    //     color: 'C2E0C6',
    //     default: false,
    //     description: '',
    //   } satisfies GithubLabel,
    //   {
    //     id: 710400704,
    //     node_id: 'MDU6TGFiZWw3MTA0MDA3MDQ=',
    //     url: 'https://api.github.com/repos/react/react/labels/Component:%20Test%20Renderer',
    //     name: 'Component: Test Renderer',
    //     color: '006b75',
    //     default: false,
    //     description: '',
    //   } satisfies GithubLabel,
    // ],

    // initialData: [
    //   {
    //     id: 6955781886,
    //     node_id: 'LA_kwDOAJy2Ks8AAAABnpjO_g',
    //     url: 'https://api.github.com/repos/react/react/labels/Compiler:%20todo',
    //     name: 'Compiler: todo',
    //     color: 'C2E0C6',
    //     default: false,
    //     description: '',
    //   } satisfies GithubLabel,
    //   {
    //     id: 710400704,
    //     node_id: 'MDU6TGFiZWw3MTA0MDA3MDQ=',
    //     url: 'https://api.github.com/repos/react/react/labels/Component:%20Test%20Renderer',
    //     name: 'Component: Test Renderer',
    //     color: '006b75',
    //     default: false,
    //     description: '',
    //   } satisfies GithubLabel,
    // ],
  })

  return { labelsQuery }
}
