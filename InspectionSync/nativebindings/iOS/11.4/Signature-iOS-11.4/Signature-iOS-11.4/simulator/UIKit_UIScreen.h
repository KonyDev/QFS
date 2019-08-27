#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIScreen_symbols(JSContext*);
@protocol UIScreenUISnapshottingCategoryInstanceExports<JSExport>
-(UIView *) snapshotViewAfterScreenUpdates: (BOOL) afterUpdates ;
@end
@protocol UIScreenUISnapshottingCategoryClassExports<JSExport>
@end
@protocol UIScreenInstanceExports<JSExport, UITraitEnvironmentInstanceExports_>
@property (readonly,nonatomic) BOOL supportsFocus;
@property (readonly,nonatomic) CGFloat scale;
@property (readonly,nonatomic) CGRect applicationFrame;
@property (nonatomic) CGFloat brightness;
@property (readonly) NSInteger maximumFramesPerSecond;
@property (readonly,nonatomic) CGFloat nativeScale;
@property (readonly,nonatomic) UIEdgeInsets overscanCompensationInsets;
@property (readonly,nonatomic) CGRect bounds;
@property (readonly,nonatomic) CGRect nativeBounds;
@property (nonatomic,strong) UIScreenMode * currentMode;
@property (readonly) id fixedCoordinateSpace;
@property (readonly,nonatomic,strong) UIScreen * mirroredScreen;
@property (readonly,nonatomic,weak) UIView * focusedView;
@property (nonatomic) BOOL wantsSoftwareDimming;
@property (readonly) id coordinateSpace;
@property (readonly,copy,nonatomic) NSArray * availableModes;
@property (readonly,nonatomic,strong) UIScreenMode * preferredMode;
@property (readonly,nonatomic,weak) id focusedItem;
@property (getter=isCaptured,readonly,nonatomic) BOOL captured;
@property (nonatomic) UIScreenOverscanCompensation overscanCompensation;
JSExportAs(displayLinkWithTargetSelector,
-(CADisplayLink *) jsdisplayLinkWithTarget: (id) target selector: (NSString *) sel );
@end
@protocol UIScreenClassExports<JSExport, UITraitEnvironmentClassExports_>
+(NSArray *) screens;
+(UIScreen *) mainScreen;
@end
#pragma clang diagnostic pop