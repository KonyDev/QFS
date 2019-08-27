#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIScrollView_symbols(JSContext*);
@protocol UIScrollViewInstanceExports<JSExport, NSCodingInstanceExports_>
@property (getter=isScrollEnabled,nonatomic) BOOL scrollEnabled;
@property (readonly,nonatomic) UIPanGestureRecognizer * panGestureRecognizer;
@property (nonatomic) BOOL showsHorizontalScrollIndicator;
@property (nonatomic) CGPoint contentOffset;
@property (nonatomic) CGFloat minimumZoomScale;
@property (getter=isDirectionalLockEnabled,nonatomic) BOOL directionalLockEnabled;
@property (nonatomic) UIScrollViewIndicatorStyle indicatorStyle;
@property (getter=isDragging,readonly,nonatomic) BOOL dragging;
@property (getter=isDecelerating,readonly,nonatomic) BOOL decelerating;
@property (nonatomic) BOOL scrollsToTop;
@property (nonatomic) CGFloat decelerationRate;
@property (readonly,nonatomic) UIPinchGestureRecognizer * pinchGestureRecognizer;
@property (nonatomic) BOOL alwaysBounceVertical;
@property (nonatomic) CGFloat maximumZoomScale;
@property (nonatomic) BOOL canCancelContentTouches;
@property (nonatomic) UIEdgeInsets contentInset;
@property (nonatomic) CGSize contentSize;
@property (getter=isPagingEnabled,nonatomic) BOOL pagingEnabled;
@property (readonly,nonatomic,strong) UILayoutGuide * contentLayoutGuide;
@property (getter=isZoomBouncing,readonly,nonatomic) BOOL zoomBouncing;
@property (nonatomic) UIScrollViewIndexDisplayMode indexDisplayMode;
@property (nonatomic) BOOL showsVerticalScrollIndicator;
@property (readonly,nonatomic,strong) UILayoutGuide * frameLayoutGuide;
@property (nonatomic) CGFloat zoomScale;
@property (nonatomic) BOOL bouncesZoom;
@property (nonatomic) UIEdgeInsets scrollIndicatorInsets;
@property (readonly,nonatomic) UIEdgeInsets adjustedContentInset;
@property (nonatomic) UIScrollViewKeyboardDismissMode keyboardDismissMode;
@property (getter=isTracking,readonly,nonatomic) BOOL tracking;
@property (nonatomic) BOOL alwaysBounceHorizontal;
@property (getter=isZooming,readonly,nonatomic) BOOL zooming;
@property (nonatomic,strong) UIRefreshControl * refreshControl;
@property (nonatomic) BOOL bounces;
@property (readonly,nonatomic) UIGestureRecognizer * directionalPressGestureRecognizer;
@property (nonatomic) UIScrollViewContentInsetAdjustmentBehavior contentInsetAdjustmentBehavior;
@property (nonatomic) BOOL delaysContentTouches;
@property (nonatomic,weak) id delegate;
-(void) flashScrollIndicators;
-(BOOL) touchesShouldBegin: (NSSet *) touches withEvent: (UIEvent *) event inContentView: (UIView *) view ;
-(void) scrollRectToVisible: (CGRect) rect animated: (BOOL) animated ;
-(void) setContentOffset: (CGPoint) contentOffset animated: (BOOL) animated ;
-(void) adjustedContentInsetDidChange;
-(void) zoomToRect: (CGRect) rect animated: (BOOL) animated ;
-(void) setZoomScale: (CGFloat) scale animated: (BOOL) animated ;
-(BOOL) touchesShouldCancelInContentView: (UIView *) view ;
@end
@protocol UIScrollViewClassExports<JSExport, NSCodingClassExports_>
@end
@protocol UIScrollViewDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) scrollViewDidScroll: (UIScrollView *) scrollView ;
-(void) scrollViewDidEndScrollingAnimation: (UIScrollView *) scrollView ;
-(void) scrollViewWillBeginZooming: (UIScrollView *) scrollView withView: (UIView *) view ;
-(void) scrollViewWillBeginDragging: (UIScrollView *) scrollView ;
-(void) scrollViewDidChangeAdjustedContentInset: (UIScrollView *) scrollView ;
-(void) scrollViewDidEndDecelerating: (UIScrollView *) scrollView ;
-(void) scrollViewWillBeginDecelerating: (UIScrollView *) scrollView ;
-(void) scrollViewDidEndDragging: (UIScrollView *) scrollView willDecelerate: (BOOL) decelerate ;
-(BOOL) scrollViewShouldScrollToTop: (UIScrollView *) scrollView ;
-(void) scrollViewDidZoom: (UIScrollView *) scrollView ;
-(void) scrollViewDidScrollToTop: (UIScrollView *) scrollView ;
-(void) scrollViewDidEndZooming: (UIScrollView *) scrollView withView: (UIView *) view atScale: (CGFloat) scale ;
-(UIView *) viewForZoomingInScrollView: (UIScrollView *) scrollView ;
@end
@protocol UIScrollViewDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop