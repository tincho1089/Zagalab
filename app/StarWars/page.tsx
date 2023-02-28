"use client"
import { QueryManager } from 'components';
import { Films } from './components';

export default function StarWars() {
  return (
    <QueryManager>
      <Films />
    </QueryManager>
  )
}
