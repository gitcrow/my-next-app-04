//인엑스 페이지를 렌더링하고 <h1> 태그를 가진 엘리먼트가 존재하는지 확인하는 테스트 코드

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import IndexPage from '../page';

describe('IndexPage', () => {
    it('renders a heading', () => {
        render(<IndexPage />);
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
    });
});