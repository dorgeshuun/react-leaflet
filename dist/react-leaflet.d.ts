import { CSSProperties } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';

declare type Extent = {
    west: number;
    south: number;
    east: number;
    north: number;
};

declare function _Map({ initialView, basemapProviderUrl, style, points, extent, onViewChange, onMouseMove, onClick, onSelect, onClickaway, }: Props): JSX_2.Element;
export default _Map;

declare type Props = {
    initialView?: {
        lng: number;
        lat: number;
        zoom: number;
    };
    basemapProviderUrl?: string;
    style?: CSSProperties;
    points?: {
        id: string;
        lng: number;
        lat: number;
        color?: string;
    }[];
    extent?: Extent;
    onViewChange?: (extent: Extent, tiles: Tile[]) => void;
    onMouseMove?: (lng: number | null, lat: number | null) => void;
    onClick?: (lng: number, lat: number) => void;
    onSelect?: (id: string) => void;
    onClickaway?: () => void;
};

declare class Tile {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    static fromExtent(west: number, south: number, east: number, north: number, zoom: number): Tile[];
    toString(): string;
}

export { }
