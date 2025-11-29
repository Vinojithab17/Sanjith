import { Card, CardContent, CardActions, Skeleton } from '@mui/material';

export default function ProjectCardSkeleton() {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, height: '100%' }}>
      <Skeleton variant="rectangular" height={200} />

      <CardContent>
        <Skeleton width="60%" height={28} />
        <Skeleton width="90%" height={18} />
        <Skeleton width="80%" height={18} />
      </CardContent>

      <CardActions>
        <Skeleton variant="rectangular" width={90} height={32} />
        <Skeleton variant="rectangular" width={90} height={32} />
      </CardActions>
    </Card>
  );
}
