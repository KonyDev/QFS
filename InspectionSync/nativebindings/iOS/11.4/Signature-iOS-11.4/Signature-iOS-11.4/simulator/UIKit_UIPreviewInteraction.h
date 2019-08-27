#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPreviewInteraction_symbols(JSContext*);
@protocol UIPreviewInteractionInstanceExports<JSExport>
@property (nonatomic,weak) id delegate;
@property (readonly,nonatomic,weak) UIView * view;
JSExportAs(initWithView,
-(id) jsinitWithView: (UIView *) view );
-(CGPoint) locationInCoordinateSpace: (id) coordinateSpace ;
-(void) cancelInteraction;
@end
@protocol UIPreviewInteractionClassExports<JSExport>
@end
@protocol UIPreviewInteractionDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) previewInteraction: (UIPreviewInteraction *) previewInteraction didUpdatePreviewTransition: (CGFloat) transitionProgress ended: (BOOL) ended ;
-(BOOL) previewInteractionShouldBegin: (UIPreviewInteraction *) previewInteraction ;
-(void) previewInteractionDidCancel: (UIPreviewInteraction *) previewInteraction ;
-(void) previewInteraction: (UIPreviewInteraction *) previewInteraction didUpdateCommitTransition: (CGFloat) transitionProgress ended: (BOOL) ended ;
@end
@protocol UIPreviewInteractionDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop