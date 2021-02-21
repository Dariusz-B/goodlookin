export interface MenuSubitem{
    id: number,
    name: string
}

export interface MenuItem{
    id: number,
    name: string,
    param: string,
    child: MenuSubitem[]
}

export interface MenuState {
    menuItems: MenuItem[];
    loaded: boolean;
    loading: boolean;
}