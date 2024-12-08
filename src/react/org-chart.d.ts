export = OrgChart;
declare class OrgChart {
    static defaultProps: {
        id: string;
        downloadImageId: string;
        downloadPdfId: string;
        zoomInId: string;
        zoomOutId: string;
        zoomExtentId: string;
    };
    render(): any;
    componentDidMount(): void;
}
