import { Story } from '@storybook/react';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';
import '@/app/styles/index.scss';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
    (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
