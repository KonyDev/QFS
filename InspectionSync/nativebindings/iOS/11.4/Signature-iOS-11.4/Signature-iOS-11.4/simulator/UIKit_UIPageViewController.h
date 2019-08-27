#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPageViewController_symbols(JSContext*);
@protocol UIPageViewControllerInstanceExports<JSExport>
@property (readonly,nonatomic) NSArray * gestureRecognizers;
@property (readonly,nonatomic) NSArray * viewControllers;
@property (readonly,nonatomic) UIPageViewControllerSpineLocation spineLocation;
@property (readonly,nonatomic) UIPageViewControllerTransitionStyle transitionStyle;
@property (nonatomic,weak) id delegate;
@property (getter=isDoubleSided,nonatomic) BOOL doubleSided;
@property (readonly,nonatomic) UIPageViewControllerNavigationOrientation navigationOrientation;
@property (nonatomic,weak) id dataSource;
JSExportAs(initWithTransitionStyleNavigationOrientationOptions,
-(id) jsinitWithTransitionStyle: (UIPageViewControllerTransitionStyle) style navigationOrientation: (UIPageViewControllerNavigationOrientation) navigationOrientation options: (NSDictionary *) options );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) coder );
JSExportAs(setViewControllersDirectionAnimatedCompletion,
-(void) jssetViewControllers: (NSArray *) viewControllers direction: (UIPageViewControllerNavigationDirection) direction animated: (BOOL) animated completion: (JSValue *) completion );
@end
@protocol UIPageViewControllerClassExports<JSExport>
@end
@protocol UIPageViewControllerDataSourceInstanceExports_<JSExport, NSObjectInstanceExports_>
-(NSInteger) presentationIndexForPageViewController: (UIPageViewController *) pageViewController ;
-(NSInteger) presentationCountForPageViewController: (UIPageViewController *) pageViewController ;
-(UIViewController *) pageViewController: (UIPageViewController *) pageViewController viewControllerBeforeViewController: (UIViewController *) viewController ;
-(UIViewController *) pageViewController: (UIPageViewController *) pageViewController viewControllerAfterViewController: (UIViewController *) viewController ;
@end
@protocol UIPageViewControllerDataSourceClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIPageViewControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) pageViewController: (UIPageViewController *) pageViewController willTransitionToViewControllers: (NSArray *) pendingViewControllers ;
-(UIInterfaceOrientation) pageViewControllerPreferredInterfaceOrientationForPresentation: (UIPageViewController *) pageViewController ;
-(void) pageViewController: (UIPageViewController *) pageViewController didFinishAnimating: (BOOL) finished previousViewControllers: (NSArray *) previousViewControllers transitionCompleted: (BOOL) completed ;
-(UIPageViewControllerSpineLocation) pageViewController: (UIPageViewController *) pageViewController spineLocationForInterfaceOrientation: (UIInterfaceOrientation) orientation ;
-(UIInterfaceOrientationMask) pageViewControllerSupportedInterfaceOrientations: (UIPageViewController *) pageViewController ;
@end
@protocol UIPageViewControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop