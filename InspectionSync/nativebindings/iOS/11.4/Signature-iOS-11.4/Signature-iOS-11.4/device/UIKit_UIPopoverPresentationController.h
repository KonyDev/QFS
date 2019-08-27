#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPopoverPresentationController_symbols(JSContext*);
@protocol UIPopoverPresentationControllerInstanceExports<JSExport>
@property (nonatomic,strong) UIView * sourceView;
@property (readwrite,nonatomic) UIEdgeInsets popoverLayoutMargins;
@property (assign,nonatomic) BOOL canOverlapSourceViewRect;
@property (getter=getJsPopoverBackgroundViewClass,setter=setJsPopoverBackgroundViewClass:) JSValue* jspopoverBackgroundViewClass;
@property (assign,nonatomic) CGRect sourceRect;
@property (nonatomic,strong) UIBarButtonItem * barButtonItem;
@property (readonly,nonatomic) UIPopoverArrowDirection arrowDirection;
@property (nonatomic,weak) id delegate;
@property (copy,nonatomic) UIColor * backgroundColor;
@property (assign,nonatomic) UIPopoverArrowDirection permittedArrowDirections;
@property (copy,nonatomic) NSArray * passthroughViews;
@end
@protocol UIPopoverPresentationControllerClassExports<JSExport>
@end
@protocol UIPopoverPresentationControllerDelegateInstanceExports_<JSExport, UIAdaptivePresentationControllerDelegateInstanceExports_>
-(void) prepareForPopoverPresentation: (UIPopoverPresentationController *) popoverPresentationController ;
-(void) popoverPresentationControllerDidDismissPopover: (UIPopoverPresentationController *) popoverPresentationController ;
-(BOOL) popoverPresentationControllerShouldDismissPopover: (UIPopoverPresentationController *) popoverPresentationController ;
@end
@protocol UIPopoverPresentationControllerDelegateClassExports_<JSExport, UIAdaptivePresentationControllerDelegateClassExports_>
@end
#pragma clang diagnostic pop