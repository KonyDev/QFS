#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPopoverController_symbols(JSContext*);
@protocol UIPopoverControllerInstanceExports<JSExport, UIAppearanceContainerInstanceExports_>
@property (nonatomic) CGSize popoverContentSize;
@property (readonly,nonatomic) UIPopoverArrowDirection popoverArrowDirection;
@property (nonatomic,strong) UIViewController * contentViewController;
@property (readwrite,nonatomic) UIEdgeInsets popoverLayoutMargins;
@property (getter=getJsPopoverBackgroundViewClass,setter=setJsPopoverBackgroundViewClass:) JSValue* jspopoverBackgroundViewClass;
@property (getter=isPopoverVisible,readonly,nonatomic) BOOL popoverVisible;
@property (copy,nonatomic) NSArray * passthroughViews;
@property (nonatomic,weak) id delegate;
@property (copy,nonatomic) UIColor * backgroundColor;
-(void) presentPopoverFromRect: (CGRect) rect inView: (UIView *) view permittedArrowDirections: (UIPopoverArrowDirection) arrowDirections animated: (BOOL) animated ;
JSExportAs(initWithContentViewController,
-(id) jsinitWithContentViewController: (UIViewController *) viewController );
-(void) dismissPopoverAnimated: (BOOL) animated ;
-(void) setContentViewController: (UIViewController *) viewController animated: (BOOL) animated ;
-(void) presentPopoverFromBarButtonItem: (UIBarButtonItem *) item permittedArrowDirections: (UIPopoverArrowDirection) arrowDirections animated: (BOOL) animated ;
-(void) setPopoverContentSize: (CGSize) size animated: (BOOL) animated ;
@end
@protocol UIPopoverControllerClassExports<JSExport, UIAppearanceContainerClassExports_>
@end
@protocol UIPopoverControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) popoverControllerDidDismissPopover: (UIPopoverController *) popoverController ;
-(BOOL) popoverControllerShouldDismissPopover: (UIPopoverController *) popoverController ;
@end
@protocol UIPopoverControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop